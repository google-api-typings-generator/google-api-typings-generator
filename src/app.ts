import fs from 'fs';
import _ from 'lodash';
import path, {basename, join} from 'path';
import request from 'request';
import sortObject from 'deep-sort-object';
import LineByLine from 'n-readlines';
import {
  ensureDirectoryExists,
  getResourceTypeName,
  getTypeDirectory,
  parseVersion,
} from './utils';
import {StreamWriter, TextWriter} from './writer';
import {Template} from './template';
import {ProxySetting} from 'get-proxy-settings';
import {hasPrefixI} from './tslint';

type JsonSchema = gapi.client.discovery.JsonSchema;
type RestResource = gapi.client.discovery.RestResource;
type RestDescription = gapi.client.discovery.RestDescription;
type RestMethod = gapi.client.discovery.RestMethod;
type DirectoryList = gapi.client.discovery.DirectoryList;

export const revisionPrefix = '// Revision: ';

const typesMap: {[key: string]: string} = {
  integer: 'number',
  object: 'any',
  any: 'any',
  string: 'string',
};

export const excludedApis = [
  'dialogflow',
  'replicapool',
  'replicapoolupdater',
  'apigee',
  'vision',
  'youtube',
];

const irregularSpaces = [
  // eslint-disable-next-line no-control-regex
  /\u000B/g, // Line Tabulation (\v) - <VT>
  // eslint-disable-next-line no-control-regex
  /\u000C/g, // Form Feed (\f) - <FF>
  /\u00A0/g, // No-Break Space - <NBSP>
  /\u0085/g, // Next Line
  /\u1680/g, // Ogham Space Mark
  /\u180E/g, // Mongolian Vowel Separator - <MVS>
  /\ufeff/g, // Zero Width No-Break Space - <BOM>
  /\u2000/g, // En Quad
  /\u2001/g, // Em Quad
  /\u2002/g, // En Space - <ENSP>
  /\u2003/g, // Em Space - <EMSP>
  /\u2004/g, // Tree-Per-Em
  /\u2005/g, // Four-Per-Em
  /\u2006/g, // Six-Per-Em
  /\u2007/g, // Figure Space
  /\u2008/g, // Punctuation Space - <PUNCSP>
  /\u2009/g, // Thin Space
  /\u200A/g, // Hair Space
  /\u200B/g, // Zero Width Space - <ZWSP>
  /\u2028/g, // Line Separator
  /\u2029/g, // Paragraph Separator
  /\u202F/g, // Narrow No-Break Space
  /\u205f/g, // Medium Mathematical Space
  /\u3000/g, // Ideographic Space
];

class IndentedTextWriter {
  constructor(
    private writer: TextWriter,
    public newLine = '\n',
    public tabString = '    '
  ) {}

  public indent = 0;

  write(chunk: string) {
    this.writer.write(chunk);
  }

  startIndentedLine(chunk = '') {
    this.write(Array(this.indent + 1).join(this.tabString) + chunk);
  }

  endIndentedLine(chunk = '') {
    this.write(chunk + Array(this.indent + 1).join(this.tabString));
  }

  writeLine(chunk = '') {
    this.startIndentedLine(chunk + this.newLine);
  }

  writeNewLine(chunk = '') {
    this.endIndentedLine(chunk + this.newLine);
  }

  end() {
    this.writer.end();
  }
}

interface TypescriptTextWriter {
  namespace(
    name: string,
    context: (writer: TypescriptTextWriter) => void
  ): void;
}

type TypescriptWriterCallback = (writer: TypescriptTextWriter) => void;

function formatPropertyName(name: string) {
  if (
    name.indexOf('.') >= 0 ||
    name.indexOf('-') >= 0 ||
    name.indexOf('@') >= 0
  ) {
    return `"${name}"`;
  }
  return name;
}

class TypescriptTextWriter implements TypescriptTextWriter {
  private readonly ignoreBannedType = '// tslint:disable-next-line:ban-types';

  constructor(
    private readonly writer: IndentedTextWriter,
    private readonly maxLineLength: number,
    private readonly bannedTypes: string[]
  ) {}

  private braces(
    text: string,
    context: (writer: TypescriptTextWriter) => void
  ) {
    this.writer.writeLine(text + ' {');
    this.writer.indent++;
    context(this);
    this.writer.indent--;
    this.writer.writeLine('}');
  }

  private includesBannedType(type: string): boolean {
    return this.bannedTypes.some(bannedType =>
      type.match(new RegExp(`\\b${bannedType}\\b`))
    );
  }

  referenceTypes(type: string) {
    this.writer.writeLine(`/// <reference types="${type}" />`);
  }

  namespace(name: string, context: TypescriptWriterCallback) {
    this.braces(`namespace ${name}`, context);
  }

  declareNamespace(name: string, context: TypescriptWriterCallback) {
    this.writer.writeLine();
    this.braces(`declare namespace ${name}`, context);
  }

  interface(
    name: string,
    context: TypescriptWriterCallback,
    emptyInterface = false
  ) {
    const ignoreRules: string[] = [];
    if (hasPrefixI(name)) {
      // workaround for cases like `IPAllocationPolicy`
      ignoreRules.push('interface-name');
    }
    if (emptyInterface) {
      ignoreRules.push('no-empty-interface');
    }
    if (ignoreRules.length > 0) {
      this.writer.writeLine(
        `// tslint:disable-next-line:${ignoreRules.join(' ')}`
      );
    }
    this.braces(`interface ${name}`, context);
  }

  anonymousType(context: TypescriptWriterCallback) {
    this.endLine('{');
    this.writer.indent++;
    context(this);
    this.writer.indent--;
    this.writer.startIndentedLine('}');
  }

  newLine(chunk: string) {
    this.writer.startIndentedLine(chunk);
  }

  endLine(chunk = '') {
    this.writer.write(chunk);
    this.writer.write(this.writer.newLine);
  }

  scope(context: TypescriptWriterCallback, startTag = '{', endTag = '}') {
    this.writer.write(startTag);
    this.writer.write(this.writer.newLine);
    this.writer.indent++;
    context(this);
    this.writer.indent--;
    this.writer.startIndentedLine(endTag);
  }

  property(
    name: string,
    type: string | TypescriptWriterCallback,
    required = true
  ) {
    if (typeof type === 'function') {
      this.writer.startIndentedLine(
        `${formatPropertyName(name)}${required ? '' : '?'}: `
      );
      type(this);
      this.endLine(';');
    } else if (typeof type === 'string') {
      this.includesBannedType(type) &&
        this.writer.writeLine(this.ignoreBannedType);
      this.writer.writeLine(
        `${formatPropertyName(name)}${required ? '' : '?'}: ${type};`
      );
    }
  }

  comment(text = '') {
    if (!text || text === '') {
      return;
    }

    const maxLineLength =
      this.maxLineLength -
      this.writer.indent * this.writer.tabString.length -
      '/**  */'.length;

    let lines: string[] = [];

    for (const line of text.trim().split(/\r?\n/g)) {
      if (line.length > maxLineLength) {
        const words = line.split(' ');
        let newLine = '';

        for (const word of words) {
          if (newLine.length + ' '.length + word.length > maxLineLength) {
            lines.push(newLine);
            newLine = word;
          } else if (newLine === '') {
            newLine = word;
          } else {
            newLine += ' ' + word;
          }
        }

        lines.push(newLine);
      } else {
        lines.push(line);
      }
    }

    lines = lines.map(x => x.replace(/\*\//g, '∗/').trim());

    for (const irregularSpace of irregularSpaces) {
      lines = lines.map(line => line.replace(irregularSpace, ' '));
    }

    if (lines.length === 1) {
      this.writer.writeLine(`/** ${lines[0]} */`);
    } else if (lines.length > 1) {
      this.writer.writeLine('/**');
      _.forEach(lines, line =>
        line ? this.writer.writeLine(` * ${line}`) : this.writer.writeLine(' *')
      );
      this.writer.writeLine(' */');
    }
  }

  method(
    name: string,
    parameters: Array<{
      parameter: string;
      type: string | TypescriptWriterCallback;
      required: boolean;
    }>,
    returnType: string,
    singleLine = false
  ) {
    const ignoreBannedReturnType = this.bannedTypes.some(bannedType =>
      returnType.match(new RegExp(`\\b${bannedType}\\b`))
    );
    if (singleLine && ignoreBannedReturnType) {
      this.writer.writeLine(this.ignoreBannedType);
    }

    this.writer.startIndentedLine(`${name}(`);

    _.forEach(parameters, (parameter, index) => {
      if (
        typeof parameter.type === 'string' &&
        this.includesBannedType(parameter.type)
      ) {
        this.writer.writeNewLine(this.ignoreBannedType);
      }
      this.write(`${parameter.parameter}${parameter.required ? '' : '?'}: `);
      this.write(parameter.type);

      if (index + 1 < parameters.length) {
        this.write(',');

        if (singleLine) {
          this.write(' ');
        } else {
          this.writeNewLine();
        }
      }
    });

    if (!singleLine && ignoreBannedReturnType) {
      this.writeNewLine();
      this.writeNewLine(this.ignoreBannedType);
    }

    this.writer.write(`): ${returnType};`);

    this.endLine();
  }

  writeLine(chunk = '') {
    this.writer.writeLine(chunk);
  }

  writeNewLine(chunk = '') {
    this.writer.writeNewLine(chunk);
  }

  write(chunk: string | TypescriptWriterCallback = '') {
    if (typeof chunk === 'string') {
      this.writer.write(chunk);
    } else if (typeof chunk === 'function') {
      chunk(this);
    }
  }

  end() {
    this.writer.end();
  }
}

function getName(path: string | undefined): string | undefined {
  if (!path) {
    return undefined;
  }
  const parts = path.split('.');

  if (parts.length > 0) {
    return _.last(parts);
  } else {
    return undefined;
  }
}

function checkExists<T>(t: T): NonNullable<T> {
  if (t === null) {
    throw new Error('Expected non-null reference, but got null');
  }
  return t as NonNullable<T>;
}

function getType(
  type: JsonSchema,
  schemas: Record<string, JsonSchema>
): string | TypescriptWriterCallback {
  if (type.type === 'array') {
    const child = getType(checkExists(type.items), schemas);

    if (typeof child === 'string') {
      return `${child}[]`;
    } else if (typeof child === 'function') {
      return (writer: TypescriptTextWriter) => {
        writer.write('Array<');
        child(writer);
        writer.write('>');
      };
    } else {
      return '[]';
    }
  } else if (type.type === 'object' && type.properties) {
    return (writer: TypescriptTextWriter) => {
      writer.anonymousType(() => {
        _.forEach(type.properties, (property, propertyName) => {
          if (property.description) {
            writer.comment(formatComment(property.description));
          }
          writer.property(
            propertyName,
            getType(property, schemas),
            property.required || false
          );
        });

        if (type.additionalProperties) {
          writer.property(
            '[key: string]',
            getType(type.additionalProperties, schemas)
          );
        }
      });
    };
  } else if (type.type === 'object' && type.additionalProperties) {
    return (writer: TypescriptTextWriter) => {
      const child = getType(checkExists(type.additionalProperties), schemas);
      // Record<K, T> (workaround for https://github.com/Maxim-Mazurok/google-api-typings-generator/issues/206)
      writer.write('{ [P in string]: ');
      writer.write(child);
      writer.write(' }');
    };
  } else if (type.type) {
    const tsType = typesMap[type.type] || type.type;
    return type.repeated ? `${tsType} | ${tsType}[]` : tsType;
  } else if (type.$ref) {
    const referencedType = schemas[type.$ref];

    if (isEmptySchema(referencedType)) {
      return 'any';
    }

    return type.$ref;
  } else throw Error();
}

function formatComment(comment: string) {
  if (!comment) return '';

  return comment;
}

function getMethodReturn(
  method: RestMethod,
  schemas: Record<string, JsonSchema>
) {
  const name = schemas['Request'] ? 'client.Request' : 'Request';

  if (method.response) {
    const schema = schemas[checkExists(method.response.$ref)];

    if (schema && !_.isEmpty(schema.properties)) {
      return `${name}<${method.response.$ref}>`;
    } else {
      return `${name}<{}>`;
    }
  } else {
    return `${name}<void>`;
  }
}

const readmeTpl = new Template('readme.dot');
const tsconfigTpl = new Template('tsconfig.dot');
const tslintTpl = new Template('tslint.dot');
const packageJsonTpl = new Template('package-json.dot');

function isEmptySchema(schema: JsonSchema) {
  return _.isEmpty(schema.properties) && !schema.additionalProperties;
}

export interface Configuration {
  discoveryJsonDirectory?: string; // temporary directory to cache discovery service JSON
  proxy?: ProxySetting;
  typesDirectory: string;
  maxLineLength: number;
  bannedTypes: string[];
  owners: string[];
}

export class App {
  private seenSchemaRefs: Set<string> = new Set();

  constructor(private readonly config: Configuration) {
    ensureDirectoryExists(config.typesDirectory);

    console.log(`types directory: ${config.typesDirectory}`);
    console.log();
  }

  static parseOutPath(dir: string) {
    ensureDirectoryExists(dir);

    return dir;
  }

  /**
   * Creates a callback that writes request parameters.
   */
  private static createRequestParameterWriterCallback(
    parameters: Record<string, JsonSchema>,
    schemas: Record<string, JsonSchema>,
    ref?: string
  ) {
    return function requestParameterWriterCallback(
      writer: TypescriptTextWriter
    ) {
      writer.anonymousType(() => {
        _.forEach(parameters, (data, key) => {
          if (data.description) {
            writer.comment(formatComment(data.description));
          }

          writer.property(key, getType(data, schemas), Boolean(data.required));
        });

        if (ref) {
          writer.comment('Request body');
          writer.property('resource', ref, true);
        }
      });
    };
  }

  /**
   * Writes specified resource definition.
   */
  private writeResources(
    out: TypescriptTextWriter,
    resources: Record<string, RestResource>,
    parameters: Record<string, JsonSchema> = {},
    schemas: Record<string, JsonSchema>
  ) {
    _.forEach(resources, (resource, resourceName) => {
      const resourceInterfaceName = getResourceTypeName(resourceName);

      if (resource.resources) {
        this.writeResources(out, resource.resources, parameters, schemas);
      }

      out.interface(resourceInterfaceName, () => {
        _.forEach(resource.methods, method => {
          if (method.description) {
            out.comment(formatComment(method.description));
          }

          const requestRef = method.request?.$ref;
          const requestParameters: Record<string, JsonSchema> = sortObject({
            ...parameters,
            ...method.parameters,
          });

          if (!requestParameters.resource || !requestRef) {
            // generate method(request)
            out.method(
              formatPropertyName(checkExists(getName(method.id))),
              [
                {
                  parameter: 'request',
                  type: App.createRequestParameterWriterCallback(
                    requestParameters,
                    schemas,
                    requestRef
                  ),
                  required: Boolean(requestRef),
                },
              ],
              getMethodReturn(method, schemas)
            );
          }

          if (requestRef) {
            // generate method(request, body)
            out.method(
              formatPropertyName(checkExists(getName(method.id))),
              [
                {
                  parameter: 'request',
                  type: App.createRequestParameterWriterCallback(
                    requestParameters,
                    schemas
                  ),
                  required: true,
                },
                {
                  parameter: 'body',
                  type: requestRef,
                  required: true,
                },
              ],
              getMethodReturn(method, schemas)
            );
          }
        });

        if (resource.resources) {
          _.forEach(resource.resources, (_, childResourceName) => {
            const childResourceInterfaceName = getResourceTypeName(
              childResourceName
            );
            out.property(childResourceName, childResourceInterfaceName);
          });
        }
      });
    });
  }

  /// writes api description for specified JSON object
  private processApi(
    destinationDirectory: string,
    api: RestDescription,
    actualVersion: boolean,
    url: string
  ) {
    console.log(
      `Generating ${api.id} definitions... ${
        (api.labels && api.labels.join(', ')) || ''
      }`
    );

    const stream = fs.createWriteStream(
      path.join(destinationDirectory, 'index.d.ts')
    );
    const writer = new TypescriptTextWriter(
      new IndentedTextWriter(new StreamWriter(stream)),
      this.config.maxLineLength,
      this.config.bannedTypes
    );

    writer.writeLine(
      `/* Type definitions for non-npm package ${api.title} ${
        api.version
      } ${parseVersion(checkExists(api.version))} */`
    );
    writer.writeLine(`// Project: ${api.documentationLink}`);
    this.config.owners.forEach((owner, index) =>
      writer.writeLine(
        index === 0
          ? `// Definitions by: ${owner}`
          : `//                 ${owner}`
      )
    );

    writer.writeLine(
      '// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped'
    );
    writer.writeLine('// TypeScript Version: 2.8');
    writer.writeLine();
    writer.writeLine('// IMPORTANT');
    writer.writeLine(
      '// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.'
    );
    writer.writeLine(
      '// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator'
    );
    writer.writeLine(`// Generated from: ${url}`);
    writer.writeLine(`${revisionPrefix}${api.revision}`);
    writer.writeLine();
    writer.referenceTypes('gapi.client');

    // write main namespace
    writer.declareNamespace('gapi.client', () => {
      writer.comment(formatComment(`Load ${api.title} ${api.version}`));

      writer.method(
        'function load',
        [
          {parameter: 'name', type: `"${api.name}"`, required: true},
          {parameter: 'version', type: `"${api.version}"`, required: true},
        ],
        'PromiseLike<void>',
        true
      );

      writer.method(
        'function load',
        [
          {parameter: 'name', type: `"${api.name}"`, required: true},
          {parameter: 'version', type: `"${api.version}"`, required: true},
          {parameter: 'callback', type: '() => any', required: true},
        ],
        'void',
        true
      );

      // expose root resources to gapi.client namespace

      writer.endLine();

      writer.namespace(checkExists(api.name), () => {
        const schemas = checkExists(api.schemas);

        _.forEach(schemas, schema => {
          writer.interface(
            checkExists(schema.id),
            () => {
              if (schema.properties) {
                _.forEach(schema.properties, (data, key) => {
                  if (data.description) {
                    writer.comment(formatComment(data.description));
                  }
                  writer.property(
                    key,
                    getType(data, schemas),
                    data.required || false
                  );
                });
              }

              if (schema.additionalProperties) {
                writer.property(
                  '[key: string]',
                  getType(schema.additionalProperties, schemas)
                );
              }
            },
            isEmptySchema(schema)
          );
        });

        if (api.resources) {
          this.writeResources(writer, api.resources, api.parameters, schemas);

          _.forEach(api.resources, (_, resourceName) => {
            if (resourceName !== 'debugger') {
              writer.endLine();
              writer.writeLine(
                `const ${resourceName}: ${getResourceTypeName(resourceName)};`
              );
            }
          });
        }
      });
    });

    writer.end();
  }

  private request(url: string): Promise<DirectoryList> {
    return new Promise((resolve, reject) => {
      request(
        url,
        {
          gzip: true,
          ...(this.config.proxy ? {proxy: this.config.proxy.toString()} : {}),
        },
        (error, response, body) => {
          if (!error && response.statusCode === 200) {
            try {
              const api = JSON.parse(body) as DirectoryList;
              resolve(api);
            } catch (e) {
              console.error(
                `Caught an error: ${e.message}; while parsing JSON from ${url}: "${body}"`
              );
              reject(error);
            }
          } else {
            console.error('Got an error: ', error);
            if (response && response.statusCode) {
              console.error(`with status code: ${response.statusCode}`);
            }
            console.error(`while fetching ${url}`);
            reject(error);
          }
        }
      );
    });
  }

  async processService(
    url: string,
    actualVersion: boolean,
    newRevisionsOnly = false
  ) {
    let api;

    try {
      api = (await this.request(url)) as RestDescription;
    } catch (e) {
      console.warn(e);
      return;
    }

    if (!api.documentationLink) {
      return console.error(
        `No documentationLink found for ${api.id}, can't write required Project header, aborting`
      );
    }

    api = sortObject(api);
    api.name = api.name!.toLocaleLowerCase();
    api.version = api.version!.toLocaleLowerCase();

    const destinationDirectory = path.join(
      this.config.typesDirectory,
      getTypeDirectory(api.name, actualVersion ? null : api.version)
    );

    if (this.config.discoveryJsonDirectory) {
      fs.writeFileSync(
        join(
          this.config.discoveryJsonDirectory,
          `${basename(destinationDirectory)}.json`
        ),
        JSON.stringify(api)
      );
    }

    ensureDirectoryExists(destinationDirectory);
    const indexDTSPath = path.join(destinationDirectory, 'index.d.ts');

    if (newRevisionsOnly && fs.existsSync(indexDTSPath)) {
      if (!api.revision) {
        return console.error(`There's no revision in JSON: ${api.id}`);
      }

      let existingRevision, line;
      const liner = new LineByLine(indexDTSPath);
      while ((line = liner.next())) {
        line = line.toString();
        if (line.startsWith(revisionPrefix)) {
          const match = line.match(new RegExp(`^${revisionPrefix}(\\d+)$`));
          if (match !== null && match.length === 2) {
            existingRevision = Number(match[1]);
            break;
          }
        }
      }

      if (!existingRevision) {
        return console.error(
          `Can't find previous revision in index.d.ts: ${api.id}`
        );
      }

      const newRevision = Number(api.revision);
      if (existingRevision > newRevision) {
        return console.warn(
          `Local revision ${existingRevision} is more recent than fetched ${newRevision}, skipping ${api.id}`
        );
      }
    }

    await this.processApi(destinationDirectory, api, actualVersion, url);

    const templateData = {...api, actualVersion};

    readmeTpl.write(path.join(destinationDirectory, 'readme.md'), templateData);
    tsconfigTpl.write(
      path.join(destinationDirectory, 'tsconfig.json'),
      templateData
    );
    tslintTpl.write(
      path.join(destinationDirectory, 'tslint.json'),
      templateData
    );
    packageJsonTpl.write(path.join(destinationDirectory, 'package.json'), {
      ...templateData,
      majorAndMinorVersion: parseVersion(checkExists(api.version)),
    });
    fs.copyFileSync(
      path.join(__dirname, 'template', '.npmrc'),
      path.join(destinationDirectory, '.npmrc')
    );

    this.writeTests(destinationDirectory, api);
  }

  private writePropertyValue(
    scope: TypescriptTextWriter,
    api: RestDescription,
    property: JsonSchema
  ) {
    switch (property.type) {
      case 'number':
      case 'integer':
        scope.write('42');
        break;
      case 'boolean':
        scope.write('true');
        break;
      case 'string':
        scope.write('"Test string"');
        break;
      case 'array':
        this.writeArray(scope, api, checkExists(property.items));
        break;
      case 'object':
        this.writeObject(scope, api, property);
        break;
      case 'any':
        scope.write('42');
        break;
      default:
        throw new Error(`Unknown scalar type ${property.type}`);
    }
  }

  private writeArray(
    scope: TypescriptTextWriter,
    api: RestDescription,
    items: JsonSchema
  ) {
    const schemaName = items.$ref;
    if (schemaName && this.seenSchemaRefs.has(schemaName)) {
      // Break out of recursive reference by writing undefined
      scope.write('undefined');
      return;
    }

    scope.scope(
      () => {
        scope.newLine('');
        if (schemaName) {
          this.writeSchemaRef(scope, api, schemaName);
        } else {
          this.writePropertyValue(scope, api, items);
        }
      },
      '[',
      ']'
    );
  }

  private writeObject(
    scope: TypescriptTextWriter,
    api: RestDescription,
    object: JsonSchema
  ) {
    const schemaName = object.additionalProperties?.$ref;
    if (schemaName && this.seenSchemaRefs.has(schemaName)) {
      scope.write('undefined');
      return;
    }
    if (object.properties) {
      // If the object has properties, only write that structure
      scope.scope(() => {
        this.writeProperties(scope, api, object.properties!);
      });
      return;
    } else if (object.additionalProperties) {
      // Otherwise, we have a Record<K, V> and we should write a placeholder key
      scope.scope(() => {
        scope.newLine('A: ');
        if (schemaName) {
          this.writeSchemaRef(scope, api, schemaName);
        } else {
          this.writePropertyValue(scope, api, object.additionalProperties!);
        }
      });
    } else {
      this.writePropertyValue(scope, api, object);
    }
  }

  // Performs a lookup of the specified interface/schema type and recursively generates stubbed values
  private writeSchemaRef(
    scope: TypescriptTextWriter,
    api: RestDescription,
    schemaName: string
  ) {
    if (this.seenSchemaRefs.has(schemaName)) {
      // Break out of recursive reference by writing undefined
      scope.write('undefined');
      return;
    }

    const schema = checkExists(api.schemas)[schemaName];
    if (!schema) {
      throw new Error(
        `Attempted to generate stub for unknown schema '${schemaName}'`
      );
    }

    this.seenSchemaRefs.add(schemaName);
    this.writeObject(scope, api, schema);
    this.seenSchemaRefs.delete(schemaName);
  }

  private writeProperties(
    scope: TypescriptTextWriter,
    api: RestDescription,
    record: Record<string, JsonSchema>
  ) {
    _.forEach(record, (parameter, name) => {
      scope.newLine(`${formatPropertyName(name)}: `);
      if (parameter.type === 'object') {
        this.writeObject(scope, api, parameter);
      } else if (parameter.$ref) {
        this.writeSchemaRef(scope, api, parameter.$ref);
      } else {
        this.writePropertyValue(scope, api, parameter);
      }
      scope.endLine(',');
    });
  }

  private writeResourceTests(
    scope: TypescriptTextWriter,
    api: RestDescription,
    ancestors: string,
    resourceName: string,
    resource: RestResource
  ) {
    _.forEach(resource.methods, (method, methodName) => {
      scope.comment(method.description);
      scope.newLine(`await ${ancestors}.${resourceName}.${methodName}(`);

      const params: Record<string, JsonSchema> | undefined = method.parameters;
      const ref = method.request?.$ref;

      if (params) {
        scope.scope(() => {
          this.writeProperties(scope, api, params);
        });
      }

      if (ref) {
        if (!params) {
          scope.write('{} ');
        }

        scope.write(', ');

        this.writeSchemaRef(scope, api, ref);
      }

      scope.endLine(');');

      _.forEach(resource.resources, (subResource, subResourceName) => {
        this.writeResourceTests(
          scope,
          api,
          `${ancestors}.${resourceName}`,
          subResourceName,
          subResource
        );
      });
    });
  }

  private writeTests(destinationDirectory: string, api: RestDescription) {
    const stream = fs.createWriteStream(
        path.join(destinationDirectory, `gapi.client.${api.name}-tests.ts`)
      ),
      writer = new TypescriptTextWriter(
        new IndentedTextWriter(new StreamWriter(stream)),
        this.config.maxLineLength,
        this.config.bannedTypes
      );

    writer.writeLine(`/* This is stub file for gapi.client.${api.name} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/`);

    writer.writeLine();
    writer.writeLine(`${revisionPrefix}${api.revision}`);
    writer.writeLine();
    writer.newLine("gapi.load('client', () => ");
    writer.scope(writer3 => {
      writer3.comment('now we can use gapi.client');
      writer3.newLine(
        `gapi.client.load('${api.name}', '${api.version}', () => `
      );
      writer3.scope(() => {
        writer3.comment(`now we can use gapi.client.${api.name}`);
        writer3.endLine();
        if (api.auth) {
          writer3.comment(
            "don't forget to authenticate your client before sending any request to resources:"
          );
          writer3.comment(
            'declare client_id registered in Google Developers Console'
          );

          writer3.writeLine("const client_id = '<<PUT YOUR CLIENT ID HERE>>';");
          writer3.newLine('const scope = ');
          writer3.scope(
            () => {
              const oauth2 = checkExists(api?.auth?.oauth2);
              _.forEach(oauth2.scopes, (value, scope) => {
                writer3.comment(value.description);
                writer3.writeLine(`'${scope}',`);
              });
            },
            '[',
            ']'
          );

          writer3.endLine(';');
          writer3.writeLine('const immediate = false;');
          writer3.newLine(
            'gapi.auth.authorize({ client_id, scope, immediate }, authResult => '
          );

          writer3.scope(scope => {
            writer3.newLine('if (authResult && !authResult.error) ');
            scope.scope(a => {
              a.comment('handle successful authorization');
              a.writeLine('run();');
            });
            scope.write(' else ');
            scope.scope(() => {
              scope.comment('handle authorization error');
            });
            writer3.endLine();
          });

          writer3.endLine(');');
        } else {
          writer3.writeLine('run();');
        }
      });

      writer3.endLine(');');
      writer3.endLine();
      writer3.newLine('async function run() ');
      writer.scope(scope => {
        _.forEach(api.resources, (resource, resourceName) => {
          this.writeResourceTests(
            scope,
            api,
            `gapi.client.${api.name}`,
            resourceName,
            resource
          );
        });
      });

      writer3.endLine();
    });
    writer.endLine(');');
  }

  async discover(
    service: string | undefined,
    allVersions = false,
    newRevisionsOnly = false
  ) {
    console.log('Discovering Google services...');

    const list: DirectoryList = await this.request(
      'https://www.googleapis.com/discovery/v1/apis'
    );

    const apis = list
      .items!.filter(api => (service ? api.name === service : true))
      .filter(api => excludedApis.indexOf(checkExists(api.name)) < 0);

    if (apis.length === 0) {
      throw Error("Can't find services");
    }

    _.forEach(
      _.groupBy(apis, item => item.name),
      async (associatedApis, apiKey) => {
        const preferredApi =
          associatedApis.find(x => x.preferred) ||
          associatedApis.sort((a, b) =>
            checkExists(a.version) > checkExists(b.version) ? 1 : -1
          )[0];

        if (preferredApi) {
          try {
            await this.processService(
              checkExists(preferredApi.discoveryRestUrl),
              checkExists(preferredApi.preferred),
              newRevisionsOnly
            );
          } catch (e) {
            console.error(e);
            throw Error(
              `Error processing service: ${preferredApi.discoveryRestUrl}`
            );
          }
        } else {
          console.warn(`Can't find preferred API for ${apiKey}`);
        }

        if (allVersions) {
          for (const api of associatedApis.filter(x => x !== preferredApi)) {
            try {
              await this.processService(
                checkExists(api.discoveryRestUrl),
                checkExists(api.preferred),
                newRevisionsOnly
              );
            } catch (e) {
              console.error(e);
            }
          }
        }
      }
    );
  }
}
