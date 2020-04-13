# TypeScript typings for SAS Portal API v1alpha1


For detailed description please check [documentation](https://developers.google.com/spectrum-access-system/).

## Installing

Install typings for SAS Portal API:

```
npm install @types/gapi.client.sasportal@v1alpha1 --save-dev
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
gapi.client.load('sasportal', 'v1alpha1', () => {
  // now we can use gapi.client.sasportal
  // ...
});
```

Don't forget to authenticate your client before sending any request to resources:

```typescript
// declare client_id registered in Google Developers Console
var client_id = '',
  scope = [ 
      // View your email address
      'https://www.googleapis.com/auth/userinfo.email',
    ],
    immediate = true;
// ...

gapi.auth.authorize(
  { client_id: client_id, scope: scope, immediate: immediate },
  authResult => {
    if (authResult && !authResult.error) {
        /* handle successful authorization */
    } else {
        /* handle authorization error */
    }
});
```

After that you can use SAS Portal API resources:

```typescript

/*
Returns a requested customer.
*/
await gapi.client.customers.get({ name: "name",  });

/*
Returns a list of requested customers.
*/
await gapi.client.customers.list({  });

/*
Updates an existing customer.
*/
await gapi.client.customers.patch({ name: "name",  });

/*
Generates a secret to be used with the ValidateInstaller method
*/
await gapi.client.installer.generateSecret({  });

/*
Validates the identity of a Certified Professional Installer (CPI).
*/
await gapi.client.installer.validate({  });

/*
Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.
*/
await gapi.client.policies.get({  });

/*
Sets the access control policy on the specified resource. Replaces any
existing policy.
*/
await gapi.client.policies.set({  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.policies.test({  });
```