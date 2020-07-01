# TypeScript typings for Domains RDAP API v1

Read-only public API that lets users search for information about domain names.
For detailed description please check [documentation](https://developers.google.com/domains/rdap/).

## Installing

Install typings for Domains RDAP API:

```
npm install @types/gapi.client.domainsrdap@v1 --save-dev
```

## Usage

You need to initialize Google API client in your code:

```typescript
gapi.load('client', () => {
  // now we can use gapi.client
  // ...
});
```

Then load api client wrapper:

```typescript
gapi.client.load('domainsrdap', 'v1', () => {
  // now we can use gapi.client.domainsrdap
  // ...
});
```



After that you can use Domains RDAP API resources:

```typescript

/*
The RDAP API recognizes this command from the RDAP specification but
does not support it. The response is a formatted 501 error.
*/
await gapi.client.domainsrdap.autnum.get({ autnumId: "autnumId",  });

/*
Look up RDAP information for a domain by name.
*/
await gapi.client.domainsrdap.domain.get({ domainName: "domainName",  });

/*
The RDAP API recognizes this command from the RDAP specification but
does not support it. The response is a formatted 501 error.
*/
await gapi.client.domainsrdap.entity.get({ entityId: "entityId",  });

/*
The RDAP API recognizes this command from the RDAP specification but
does not support it. The response is a formatted 501 error.
*/
await gapi.client.domainsrdap.ip.get({ ipId: "ipId", ipId1: "ipId1",  });

/*
The RDAP API recognizes this command from the RDAP specification but
does not support it. The response is a formatted 501 error.
*/
await gapi.client.domainsrdap.nameserver.get({ nameserverId: "nameserverId",  });

/*
The RDAP API recognizes this command from the RDAP specification but
does not support it. The response is a formatted 501 error.
*/
await gapi.client.domainsrdap.v1.getDomains({  });

/*
The RDAP API recognizes this command from the RDAP specification but
does not support it. The response is a formatted 501 error.
*/
await gapi.client.domainsrdap.v1.getEntities({  });

/*
Get help information for the RDAP API, including links to documentation.
*/
await gapi.client.domainsrdap.v1.getHelp({  });

/*
The RDAP API recognizes this command from the RDAP specification but
does not support it. The response is a formatted 501 error.
*/
await gapi.client.domainsrdap.v1.getIp({  });

/*
The RDAP API recognizes this command from the RDAP specification but
does not support it. The response is a formatted 501 error.
*/
await gapi.client.domainsrdap.v1.getNameservers({  });
```