// Type definitions for non-npm package API Discovery Service v1 1.0
// Project: https://developers.google.com/discovery/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://www.googleapis.com/discovery/v1/apis/discovery/v1/rest
// Revision: 20200213

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load API Discovery Service v1 */
    function load(name: "discovery", version: "v1"): PromiseLike<void>;
    function load(name: "discovery", version: "v1", callback: () => any): void;

    namespace discovery {
        interface DirectoryList {
            /** Indicate the version of the Discovery API used to generate this doc. */
            discoveryVersion?: string;
            /** The individual directory entries. One entry per api/version pair. */
            items?: Array<{
                /** The description of this API. */
                description?: string;
                /** A link to the discovery document. */
                discoveryLink?: string;
                /** The URL for the discovery REST document. */
                discoveryRestUrl?: string;
                /** A link to human readable documentation for the API. */
                documentationLink?: string;
                /** Links to 16x16 and 32x32 icons representing the API. */
                icons?: {
                    /** The URL of the 16x16 icon. */
                    x16?: string;
                    /** The URL of the 32x32 icon. */
                    x32?: string;
                };
                /** The id of this API. */
                id?: string;
                /** The kind for this response. */
                kind?: string;
                /** Labels for the status of this API, such as labs or deprecated. */
                labels?: string[];
                /** The name of the API. */
                name?: string;
                /** True if this version is the preferred version to use. */
                preferred?: boolean;
                /** The title of this API. */
                title?: string;
                /** The version of the API. */
                version?: string;
            }>;
            /** The kind for this response. */
            kind?: string;
        }
        interface JsonSchema {
            /** A reference to another schema. The value of this property is the "id" of another schema. */
            $ref?: string;
            /** If this is a schema for an object, this property is the schema for any additional properties with dynamic keys on this object. */
            additionalProperties?: JsonSchema;
            /** Additional information about this property. */
            annotations?: {
                /** A list of methods for which this property is required on requests. */
                required?: string[];
            };
            /** The default value of this property (if one exists). */
            default?: string;
            /** A description of this object. */
            description?: string;
            /** Values this parameter may take (if it is an enum). */
            enum?: string[];
            /** The descriptions for the enums. Each position maps to the corresponding value in the "enum" array. */
            enumDescriptions?: string[];
            /**
             * An additional regular expression or key that helps constrain the value. For more details see:
             * http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.23
             */
            format?: string;
            /** Unique identifier for this schema. */
            id?: string;
            /** If this is a schema for an array, this property is the schema for each element in the array. */
            items?: JsonSchema;
            /** Whether this parameter goes in the query or the path for REST requests. */
            location?: string;
            /** The maximum value of this parameter. */
            maximum?: string;
            /** The minimum value of this parameter. */
            minimum?: string;
            /** The regular expression this parameter must conform to. Uses Java 6 regex format: http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html */
            pattern?: string;
            /** If this is a schema for an object, list the schema for each property of this object. */
            properties?: Record<string, JsonSchema>;
            /**
             * The value is read-only, generated by the service. The value cannot be modified by the client. If the value is included in a POST, PUT, or PATCH
             * request, it is ignored by the service.
             */
            readOnly?: boolean;
            /** Whether this parameter may appear multiple times. */
            repeated?: boolean;
            /** Whether the parameter is required. */
            required?: boolean;
            /** The value type for this schema. A list of values can be found here: http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.1 */
            type?: string;
            /**
             * In a variant data type, the value of one property is used to determine how to interpret the entire entity. Its value must exist in a map of
             * descriminant values to schema names.
             */
            variant?: {
                /** The name of the type discriminant property. */
                discriminant?: string;
                /** The map of discriminant value to schema to use for parsing.. */
                map?: Array<{
                    $ref?: string;
                    type_value?: string;
                }>;
            };
        }
        interface RestDescription {
            /** Authentication information. */
            auth?: {
                /** OAuth 2.0 authentication information. */
                oauth2?: {
                    /** Available OAuth 2.0 scopes. */
                    scopes?: Record<string, {
                        /** Description of scope. */
                        description?: string;
                    }>;
                };
            };
            /** [DEPRECATED] The base path for REST requests. */
            basePath?: string;
            /** [DEPRECATED] The base URL for REST requests. */
            baseUrl?: string;
            /** The path for REST batch requests. */
            batchPath?: string;
            /** Indicates how the API name should be capitalized and split into various parts. Useful for generating pretty class names. */
            canonicalName?: string;
            /** The description of this API. */
            description?: string;
            /** Indicate the version of the Discovery API used to generate this doc. */
            discoveryVersion?: string;
            /** A link to human readable documentation for the API. */
            documentationLink?: string;
            /** The ETag for this response. */
            etag?: string;
            /** Enable exponential backoff for suitable methods in the generated clients. */
            exponentialBackoffDefault?: boolean;
            /** A list of supported features for this API. */
            features?: string[];
            /** Links to 16x16 and 32x32 icons representing the API. */
            icons?: {
                /** The URL of the 16x16 icon. */
                x16?: string;
                /** The URL of the 32x32 icon. */
                x32?: string;
            };
            /** The ID of this API. */
            id?: string;
            /** The kind for this response. */
            kind?: string;
            /** Labels for the status of this API, such as labs or deprecated. */
            labels?: string[];
            /** API-level methods for this API. */
            methods?: Record<string, RestMethod>;
            /** The name of this API. */
            name?: string;
            /**
             * The domain of the owner of this API. Together with the ownerName and a packagePath values, this can be used to generate a library for this API which
             * would have a unique fully qualified name.
             */
            ownerDomain?: string;
            /** The name of the owner of this API. See ownerDomain. */
            ownerName?: string;
            /** The package of the owner of this API. See ownerDomain. */
            packagePath?: string;
            /** Common parameters that apply across all apis. */
            parameters?: Record<string, JsonSchema>;
            /** The protocol described by this document. */
            protocol?: string;
            /** The resources in this API. */
            resources?: Record<string, RestResource>;
            /** The version of this API. */
            revision?: string;
            /** The root URL under which all API services live. */
            rootUrl?: string;
            /** The schemas for this API. */
            schemas?: Record<string, JsonSchema>;
            /** The base path for all REST requests. */
            servicePath?: string;
            /** The title of this API. */
            title?: string;
            /** The version of this API. */
            version?: string;
            version_module?: boolean;
        }
        interface RestMethod {
            /** Description of this method. */
            description?: string;
            /** Whether this method requires an ETag to be specified. The ETag is sent as an HTTP If-Match or If-None-Match header. */
            etagRequired?: boolean;
            /** HTTP method used by this method. */
            httpMethod?: string;
            /** A unique ID for this method. This property can be used to match methods between different versions of Discovery. */
            id?: string;
            /** Media upload parameters. */
            mediaUpload?: {
                /** MIME Media Ranges for acceptable media uploads to this method. */
                accept?: string[];
                /** Maximum size of a media upload, such as "1MB", "2GB" or "3TB". */
                maxSize?: string;
                /** Supported upload protocols. */
                protocols?: {
                    /** Supports the Resumable Media Upload protocol. */
                    resumable?: {
                        /** True if this endpoint supports uploading multipart media. */
                        multipart?: boolean;
                        /** The URI path to be used for upload. Should be used in conjunction with the basePath property at the api-level. */
                        path?: string;
                    };
                    /** Supports uploading as a single HTTP request. */
                    simple?: {
                        /** True if this endpoint supports upload multipart media. */
                        multipart?: boolean;
                        /** The URI path to be used for upload. Should be used in conjunction with the basePath property at the api-level. */
                        path?: string;
                    };
                };
            };
            /**
             * Ordered list of required parameters, serves as a hint to clients on how to structure their method signatures. The array is ordered such that the
             * "most-significant" parameter appears first.
             */
            parameterOrder?: string[];
            /** Details for all parameters in this method. */
            parameters?: Record<string, JsonSchema>;
            /** The URI path of this REST method. Should be used in conjunction with the basePath property at the api-level. */
            path?: string;
            /** The schema for the request. */
            request?: {
                /** Schema ID for the request schema. */
                $ref?: string;
                /** parameter name. */
                parameterName?: string;
            };
            /** The schema for the response. */
            response?: {
                /** Schema ID for the response schema. */
                $ref?: string;
            };
            /** OAuth 2.0 scopes applicable to this method. */
            scopes?: string[];
            /** Whether this method supports media downloads. */
            supportsMediaDownload?: boolean;
            /** Whether this method supports media uploads. */
            supportsMediaUpload?: boolean;
            /** Whether this method supports subscriptions. */
            supportsSubscription?: boolean;
            /** Indicates that downloads from this method should use the download service URL (i.e. "/download"). Only applies if the method supports media download. */
            useMediaDownloadService?: boolean;
        }
        interface RestResource {
            /** Methods on this resource. */
            methods?: Record<string, RestMethod>;
            /** Sub-resources on this resource. */
            resources?: Record<string, RestResource>;
        }
        interface ApisResource {
            /** Retrieve the description of a particular version of an api. */
            getRest(request?: {
                /** Data format for the response. */
                alt?: string;
                /** The name of the API. */
                api: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
                quotaUser?: string;
                /** Deprecated. Please use quotaUser instead. */
                userIp?: string;
                /** The version of the API. */
                version: string;
            }): Request<RestDescription>;
            /** Retrieve the list of APIs supported at this endpoint. */
            list(request?: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Only include APIs with the given name. */
                name?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Return only the preferred version of an API. */
                preferred?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
                quotaUser?: string;
                /** Deprecated. Please use quotaUser instead. */
                userIp?: string;
            }): Request<DirectoryList>;
        }

        const apis: ApisResource;
    }
}
