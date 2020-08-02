# TypeScript typings for Real-time Bidding API v1

Allows external bidders to manage their RTB integration with Google. This includes managing bidder endpoints, QPS quotas, configuring what ad inventory to receive via pretargeting, submitting creatives for verification, and accessing creative metadata such as approval status.
For detailed description please check [documentation](https://developers.google.com/authorized-buyers/apis/realtimebidding/reference/rest/).

## Installing

Install typings for Real-time Bidding API:

```
npm install @types/gapi.client.realtimebidding@v1 --save-dev
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
gapi.client.load('realtimebidding', 'v1', () => {
  // now we can use gapi.client.realtimebidding
  // ...
});
```

Don't forget to authenticate your client before sending any request to resources:

```typescript
// declare client_id registered in Google Developers Console
var client_id = '',
  scope = [ 
      // See, create, edit, and delete your Authorized Buyers and Open Bidding account entities
      'https://www.googleapis.com/auth/realtime-bidding',
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

After that you can use Real-time Bidding API resources:

```typescript

/*
Gets remarketing tag for a buyer. A remarketing tag is a piece of
JavaScript code that can be placed on a web page. When a user
visits a page containing a remarketing tag, Google adds the user to a user
list.
*/
await gapi.client.realtimebidding.buyers.getRemarketingTag({ name: "name",  });
```