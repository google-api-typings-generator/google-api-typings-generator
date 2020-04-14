# TypeScript typings for Compute Engine API v1

Creates and runs virtual machines on Google Cloud Platform.
For detailed description please check [documentation](https://developers.google.com/compute/docs/reference/latest/).

## Installing

Install typings for Compute Engine API:

```
npm install @types/gapi.client.compute@v1 --save-dev
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
gapi.client.load('compute', 'v1', () => {
  // now we can use gapi.client.compute
  // ...
});
```

Don't forget to authenticate your client before sending any request to resources:

```typescript
// declare client_id registered in Google Developers Console
var client_id = '',
  scope = [ 
      // View and manage your data across Google Cloud Platform services
      'https://www.googleapis.com/auth/cloud-platform',

      // View and manage your Google Compute Engine resources
      'https://www.googleapis.com/auth/compute',

      // View your Google Compute Engine resources
      'https://www.googleapis.com/auth/compute.readonly',

      // Manage your data and permissions in Google Cloud Storage
      'https://www.googleapis.com/auth/devstorage.full_control',

      // View your data in Google Cloud Storage
      'https://www.googleapis.com/auth/devstorage.read_only',

      // Manage your data in Google Cloud Storage
      'https://www.googleapis.com/auth/devstorage.read_write',
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

After that you can use Compute Engine API resources:

```typescript

/*
Retrieves an aggregated list of accelerator types.
*/
await gapi.client.acceleratorTypes.aggregatedList({ project: "project",  });

/*
Returns the specified accelerator type.
*/
await gapi.client.acceleratorTypes.get({ acceleratorType: "acceleratorType", project: "project", zone: "zone",  });

/*
Retrieves a list of accelerator types available to the specified project.
*/
await gapi.client.acceleratorTypes.list({ project: "project", zone: "zone",  });

/*
Retrieves an aggregated list of addresses.
*/
await gapi.client.addresses.aggregatedList({ project: "project",  });

/*
Deletes the specified address resource.
*/
await gapi.client.addresses.delete({ address: "address", project: "project", region: "region",  });

/*
Returns the specified address resource.
*/
await gapi.client.addresses.get({ address: "address", project: "project", region: "region",  });

/*
Creates an address resource in the specified project by using the data included in the request.
*/
await gapi.client.addresses.insert({ project: "project", region: "region",  });

/*
Retrieves a list of addresses contained within the specified region.
*/
await gapi.client.addresses.list({ project: "project", region: "region",  });

/*
Retrieves an aggregated list of autoscalers.
*/
await gapi.client.autoscalers.aggregatedList({ project: "project",  });

/*
Deletes the specified autoscaler.
*/
await gapi.client.autoscalers.delete({ autoscaler: "autoscaler", project: "project", zone: "zone",  });

/*
Returns the specified autoscaler resource. Gets a list of available autoscalers by making a list() request.
*/
await gapi.client.autoscalers.get({ autoscaler: "autoscaler", project: "project", zone: "zone",  });

/*
Creates an autoscaler in the specified project using the data included in the request.
*/
await gapi.client.autoscalers.insert({ project: "project", zone: "zone",  });

/*
Retrieves a list of autoscalers contained within the specified zone.
*/
await gapi.client.autoscalers.list({ project: "project", zone: "zone",  });

/*
Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.autoscalers.patch({ project: "project", zone: "zone",  });

/*
Updates an autoscaler in the specified project using the data included in the request.
*/
await gapi.client.autoscalers.update({ project: "project", zone: "zone",  });

/*
Adds a key for validating requests with signed URLs for this backend bucket.
*/
await gapi.client.backendBuckets.addSignedUrlKey({ backendBucket: "backendBucket", project: "project",  });

/*
Deletes the specified BackendBucket resource.
*/
await gapi.client.backendBuckets.delete({ backendBucket: "backendBucket", project: "project",  });

/*
Deletes a key for validating requests with signed URLs for this backend bucket.
*/
await gapi.client.backendBuckets.deleteSignedUrlKey({ backendBucket: "backendBucket", keyName: "keyName", project: "project",  });

/*
Returns the specified BackendBucket resource. Gets a list of available backend buckets by making a list() request.
*/
await gapi.client.backendBuckets.get({ backendBucket: "backendBucket", project: "project",  });

/*
Creates a BackendBucket resource in the specified project using the data included in the request.
*/
await gapi.client.backendBuckets.insert({ project: "project",  });

/*
Retrieves the list of BackendBucket resources available to the specified project.
*/
await gapi.client.backendBuckets.list({ project: "project",  });

/*
Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.backendBuckets.patch({ backendBucket: "backendBucket", project: "project",  });

/*
Updates the specified BackendBucket resource with the data included in the request.
*/
await gapi.client.backendBuckets.update({ backendBucket: "backendBucket", project: "project",  });

/*
Adds a key for validating requests with signed URLs for this backend service.
*/
await gapi.client.backendServices.addSignedUrlKey({ backendService: "backendService", project: "project",  });

/*
Retrieves the list of all BackendService resources, regional and global, available to the specified project.
*/
await gapi.client.backendServices.aggregatedList({ project: "project",  });

/*
Deletes the specified BackendService resource.
*/
await gapi.client.backendServices.delete({ backendService: "backendService", project: "project",  });

/*
Deletes a key for validating requests with signed URLs for this backend service.
*/
await gapi.client.backendServices.deleteSignedUrlKey({ backendService: "backendService", keyName: "keyName", project: "project",  });

/*
Returns the specified BackendService resource. Gets a list of available backend services.
*/
await gapi.client.backendServices.get({ backendService: "backendService", project: "project",  });

/*
Gets the most recent health check results for this BackendService.
*/
await gapi.client.backendServices.getHealth({ backendService: "backendService", project: "project",  });

/*
Creates a BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a backend service. Read  Understanding backend services for more information.
*/
await gapi.client.backendServices.insert({ project: "project",  });

/*
Retrieves the list of BackendService resources available to the specified project.
*/
await gapi.client.backendServices.list({ project: "project",  });

/*
Patches the specified BackendService resource with the data included in the request. There are several Understanding backend services to keep in mind when updating a backend service. Read  Understanding backend services for more information. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.backendServices.patch({ backendService: "backendService", project: "project",  });

/*
Sets the security policy for the specified backend service.
*/
await gapi.client.backendServices.setSecurityPolicy({ backendService: "backendService", project: "project",  });

/*
Updates the specified BackendService resource with the data included in the request. There are several Understanding backend services to keep in mind when updating a backend service. Read  Understanding backend services for more information.
*/
await gapi.client.backendServices.update({ backendService: "backendService", project: "project",  });

/*
Adds existing resource policies to a disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
*/
await gapi.client.disks.addResourcePolicies({ disk: "disk", project: "project", zone: "zone",  });

/*
Retrieves an aggregated list of persistent disks.
*/
await gapi.client.disks.aggregatedList({ project: "project",  });

/*
Creates a snapshot of a specified persistent disk.
*/
await gapi.client.disks.createSnapshot({ disk: "disk", project: "project", zone: "zone",  });

/*
Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
*/
await gapi.client.disks.delete({ disk: "disk", project: "project", zone: "zone",  });

/*
Returns a specified persistent disk. Gets a list of available persistent disks by making a list() request.
*/
await gapi.client.disks.get({ disk: "disk", project: "project", zone: "zone",  });

/*
Gets the access control policy for a resource. May be empty if no such policy or resource exists.
*/
await gapi.client.disks.getIamPolicy({ project: "project", resource: "resource", zone: "zone",  });

/*
Creates a persistent disk in the specified project using the data in the request. You can create a disk with a sourceImage, a sourceSnapshot, or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.
*/
await gapi.client.disks.insert({ project: "project", zone: "zone",  });

/*
Retrieves a list of persistent disks contained within the specified zone.
*/
await gapi.client.disks.list({ project: "project", zone: "zone",  });

/*
Removes resource policies from a disk.
*/
await gapi.client.disks.removeResourcePolicies({ disk: "disk", project: "project", zone: "zone",  });

/*
Resizes the specified persistent disk. You can only increase the size of the disk.
*/
await gapi.client.disks.resize({ disk: "disk", project: "project", zone: "zone",  });

/*
Sets the access control policy on the specified resource. Replaces any existing policy.
*/
await gapi.client.disks.setIamPolicy({ project: "project", resource: "resource", zone: "zone",  });

/*
Sets the labels on a disk. To learn more about labels, read the Labeling Resources documentation.
*/
await gapi.client.disks.setLabels({ project: "project", resource: "resource", zone: "zone",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.disks.testIamPermissions({ project: "project", resource: "resource", zone: "zone",  });

/*
Retrieves an aggregated list of disk types.
*/
await gapi.client.diskTypes.aggregatedList({ project: "project",  });

/*
Returns the specified disk type. Gets a list of available disk types by making a list() request.
*/
await gapi.client.diskTypes.get({ diskType: "diskType", project: "project", zone: "zone",  });

/*
Retrieves a list of disk types available to the specified project.
*/
await gapi.client.diskTypes.list({ project: "project", zone: "zone",  });

/*
Deletes the specified externalVpnGateway.
*/
await gapi.client.externalVpnGateways.delete({ externalVpnGateway: "externalVpnGateway", project: "project",  });

/*
Returns the specified externalVpnGateway. Get a list of available externalVpnGateways by making a list() request.
*/
await gapi.client.externalVpnGateways.get({ externalVpnGateway: "externalVpnGateway", project: "project",  });

/*
Creates a ExternalVpnGateway in the specified project using the data included in the request.
*/
await gapi.client.externalVpnGateways.insert({ project: "project",  });

/*
Retrieves the list of ExternalVpnGateway available to the specified project.
*/
await gapi.client.externalVpnGateways.list({ project: "project",  });

/*
Sets the labels on an ExternalVpnGateway. To learn more about labels, read the Labeling Resources documentation.
*/
await gapi.client.externalVpnGateways.setLabels({ project: "project", resource: "resource",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.externalVpnGateways.testIamPermissions({ project: "project", resource: "resource",  });

/*
Deletes the specified firewall.
*/
await gapi.client.firewalls.delete({ firewall: "firewall", project: "project",  });

/*
Returns the specified firewall.
*/
await gapi.client.firewalls.get({ firewall: "firewall", project: "project",  });

/*
Creates a firewall rule in the specified project using the data included in the request.
*/
await gapi.client.firewalls.insert({ project: "project",  });

/*
Retrieves the list of firewall rules available to the specified project.
*/
await gapi.client.firewalls.list({ project: "project",  });

/*
Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.firewalls.patch({ firewall: "firewall", project: "project",  });

/*
Updates the specified firewall rule with the data included in the request. Note that all fields will be updated if using PUT, even fields that are not specified. To update individual fields, please use PATCH instead.
*/
await gapi.client.firewalls.update({ firewall: "firewall", project: "project",  });

/*
Retrieves an aggregated list of forwarding rules.
*/
await gapi.client.forwardingRules.aggregatedList({ project: "project",  });

/*
Deletes the specified ForwardingRule resource.
*/
await gapi.client.forwardingRules.delete({ forwardingRule: "forwardingRule", project: "project", region: "region",  });

/*
Returns the specified ForwardingRule resource.
*/
await gapi.client.forwardingRules.get({ forwardingRule: "forwardingRule", project: "project", region: "region",  });

/*
Creates a ForwardingRule resource in the specified project and region using the data included in the request.
*/
await gapi.client.forwardingRules.insert({ project: "project", region: "region",  });

/*
Retrieves a list of ForwardingRule resources available to the specified project and region.
*/
await gapi.client.forwardingRules.list({ project: "project", region: "region",  });

/*
Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
*/
await gapi.client.forwardingRules.patch({ forwardingRule: "forwardingRule", project: "project", region: "region",  });

/*
Changes target URL for forwarding rule. The new target should be of the same type as the old target.
*/
await gapi.client.forwardingRules.setTarget({ forwardingRule: "forwardingRule", project: "project", region: "region",  });

/*
Deletes the specified address resource.
*/
await gapi.client.globalAddresses.delete({ address: "address", project: "project",  });

/*
Returns the specified address resource. Gets a list of available addresses by making a list() request.
*/
await gapi.client.globalAddresses.get({ address: "address", project: "project",  });

/*
Creates an address resource in the specified project by using the data included in the request.
*/
await gapi.client.globalAddresses.insert({ project: "project",  });

/*
Retrieves a list of global addresses.
*/
await gapi.client.globalAddresses.list({ project: "project",  });

/*
Deletes the specified GlobalForwardingRule resource.
*/
await gapi.client.globalForwardingRules.delete({ forwardingRule: "forwardingRule", project: "project",  });

/*
Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() request.
*/
await gapi.client.globalForwardingRules.get({ forwardingRule: "forwardingRule", project: "project",  });

/*
Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
*/
await gapi.client.globalForwardingRules.insert({ project: "project",  });

/*
Retrieves a list of GlobalForwardingRule resources available to the specified project.
*/
await gapi.client.globalForwardingRules.list({ project: "project",  });

/*
Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
*/
await gapi.client.globalForwardingRules.patch({ forwardingRule: "forwardingRule", project: "project",  });

/*
Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.
*/
await gapi.client.globalForwardingRules.setTarget({ forwardingRule: "forwardingRule", project: "project",  });

/*
Attach a network endpoint to the specified network endpoint group.
*/
await gapi.client.globalNetworkEndpointGroups.attachNetworkEndpoints({ networkEndpointGroup: "networkEndpointGroup", project: "project",  });

/*
Deletes the specified network endpoint group.Note that the NEG cannot be deleted if there are backend services referencing it.
*/
await gapi.client.globalNetworkEndpointGroups.delete({ networkEndpointGroup: "networkEndpointGroup", project: "project",  });

/*
Detach the network endpoint from the specified network endpoint group.
*/
await gapi.client.globalNetworkEndpointGroups.detachNetworkEndpoints({ networkEndpointGroup: "networkEndpointGroup", project: "project",  });

/*
Returns the specified network endpoint group. Gets a list of available network endpoint groups by making a list() request.
*/
await gapi.client.globalNetworkEndpointGroups.get({ networkEndpointGroup: "networkEndpointGroup", project: "project",  });

/*
Creates a network endpoint group in the specified project using the parameters that are included in the request.
*/
await gapi.client.globalNetworkEndpointGroups.insert({ project: "project",  });

/*
Retrieves the list of network endpoint groups that are located in the specified project.
*/
await gapi.client.globalNetworkEndpointGroups.list({ project: "project",  });

/*
Lists the network endpoints in the specified network endpoint group.
*/
await gapi.client.globalNetworkEndpointGroups.listNetworkEndpoints({ networkEndpointGroup: "networkEndpointGroup", project: "project",  });

/*
Retrieves an aggregated list of all operations.
*/
await gapi.client.globalOperations.aggregatedList({ project: "project",  });

/*
Deletes the specified Operations resource.
*/
await gapi.client.globalOperations.delete({ operation: "operation", project: "project",  });

/*
Retrieves the specified Operations resource. Gets a list of operations by making a `list()` request.
*/
await gapi.client.globalOperations.get({ operation: "operation", project: "project",  });

/*
Retrieves a list of Operation resources contained within the specified project.
*/
await gapi.client.globalOperations.list({ project: "project",  });

/*
Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress.

This method is called on a best-effort basis. Specifically:  
- In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. 
- If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`.
*/
await gapi.client.globalOperations.wait({ operation: "operation", project: "project",  });

/*
Retrieves the list of all HealthCheck resources, regional and global, available to the specified project.
*/
await gapi.client.healthChecks.aggregatedList({ project: "project",  });

/*
Deletes the specified HealthCheck resource.
*/
await gapi.client.healthChecks.delete({ healthCheck: "healthCheck", project: "project",  });

/*
Returns the specified HealthCheck resource. Gets a list of available health checks by making a list() request.
*/
await gapi.client.healthChecks.get({ healthCheck: "healthCheck", project: "project",  });

/*
Creates a HealthCheck resource in the specified project using the data included in the request.
*/
await gapi.client.healthChecks.insert({ project: "project",  });

/*
Retrieves the list of HealthCheck resources available to the specified project.
*/
await gapi.client.healthChecks.list({ project: "project",  });

/*
Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.healthChecks.patch({ healthCheck: "healthCheck", project: "project",  });

/*
Updates a HealthCheck resource in the specified project using the data included in the request.
*/
await gapi.client.healthChecks.update({ healthCheck: "healthCheck", project: "project",  });

/*
Deletes the specified HttpHealthCheck resource.
*/
await gapi.client.httpHealthChecks.delete({ httpHealthCheck: "httpHealthCheck", project: "project",  });

/*
Returns the specified HttpHealthCheck resource. Gets a list of available HTTP health checks by making a list() request.
*/
await gapi.client.httpHealthChecks.get({ httpHealthCheck: "httpHealthCheck", project: "project",  });

/*
Creates a HttpHealthCheck resource in the specified project using the data included in the request.
*/
await gapi.client.httpHealthChecks.insert({ project: "project",  });

/*
Retrieves the list of HttpHealthCheck resources available to the specified project.
*/
await gapi.client.httpHealthChecks.list({ project: "project",  });

/*
Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.httpHealthChecks.patch({ httpHealthCheck: "httpHealthCheck", project: "project",  });

/*
Updates a HttpHealthCheck resource in the specified project using the data included in the request.
*/
await gapi.client.httpHealthChecks.update({ httpHealthCheck: "httpHealthCheck", project: "project",  });

/*
Deletes the specified HttpsHealthCheck resource.
*/
await gapi.client.httpsHealthChecks.delete({ httpsHealthCheck: "httpsHealthCheck", project: "project",  });

/*
Returns the specified HttpsHealthCheck resource. Gets a list of available HTTPS health checks by making a list() request.
*/
await gapi.client.httpsHealthChecks.get({ httpsHealthCheck: "httpsHealthCheck", project: "project",  });

/*
Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
*/
await gapi.client.httpsHealthChecks.insert({ project: "project",  });

/*
Retrieves the list of HttpsHealthCheck resources available to the specified project.
*/
await gapi.client.httpsHealthChecks.list({ project: "project",  });

/*
Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.httpsHealthChecks.patch({ httpsHealthCheck: "httpsHealthCheck", project: "project",  });

/*
Updates a HttpsHealthCheck resource in the specified project using the data included in the request.
*/
await gapi.client.httpsHealthChecks.update({ httpsHealthCheck: "httpsHealthCheck", project: "project",  });

/*
Deletes the specified image.
*/
await gapi.client.images.delete({ image: "image", project: "project",  });

/*
Sets the deprecation status of an image.

If an empty request body is given, clears the deprecation status instead.
*/
await gapi.client.images.deprecate({ image: "image", project: "project",  });

/*
Returns the specified image. Gets a list of available images by making a list() request.
*/
await gapi.client.images.get({ image: "image", project: "project",  });

/*
Returns the latest image that is part of an image family and is not deprecated.
*/
await gapi.client.images.getFromFamily({ family: "family", project: "project",  });

/*
Gets the access control policy for a resource. May be empty if no such policy or resource exists.
*/
await gapi.client.images.getIamPolicy({ project: "project", resource: "resource",  });

/*
Creates an image in the specified project using the data included in the request.
*/
await gapi.client.images.insert({ project: "project",  });

/*
Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.
*/
await gapi.client.images.list({ project: "project",  });

/*
Sets the access control policy on the specified resource. Replaces any existing policy.
*/
await gapi.client.images.setIamPolicy({ project: "project", resource: "resource",  });

/*
Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.
*/
await gapi.client.images.setLabels({ project: "project", resource: "resource",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.images.testIamPermissions({ project: "project", resource: "resource",  });

/*
Flags the specified instances to be removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.
*/
await gapi.client.instanceGroupManagers.abandonInstances({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  });

/*
Retrieves the list of managed instance groups and groups them by zone.
*/
await gapi.client.instanceGroupManagers.aggregatedList({ project: "project",  });

/*
Applies changes to selected instances on the managed instance group. This method can be used to apply new overrides and/or new versions.
*/
await gapi.client.instanceGroupManagers.applyUpdatesToInstances({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  });

/*
Creates instances with per-instance configs in this managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.
*/
await gapi.client.instanceGroupManagers.createInstances({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  });

/*
Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read  Deleting an instance group for more information.
*/
await gapi.client.instanceGroupManagers.delete({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  });

/*
Flags the specified instances in the managed instance group for immediate deletion. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.
*/
await gapi.client.instanceGroupManagers.deleteInstances({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  });

/*
Returns all of the details about the specified managed instance group. Gets a list of available managed instance groups by making a list() request.
*/
await gapi.client.instanceGroupManagers.get({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  });

/*
Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.

A managed instance group can have up to 1000 VM instances per group. Please contact Cloud Support if you need an increase in this limit.
*/
await gapi.client.instanceGroupManagers.insert({ project: "project", zone: "zone",  });

/*
Retrieves a list of managed instance groups that are contained within the specified project and zone.
*/
await gapi.client.instanceGroupManagers.list({ project: "project", zone: "zone",  });

/*
Lists all errors thrown by actions on instances for a given managed instance group.
*/
await gapi.client.instanceGroupManagers.listErrors({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  });

/*
Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action.
*/
await gapi.client.instanceGroupManagers.listManagedInstances({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  });

/*
Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listManagedInstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.instanceGroupManagers.patch({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  });

/*
Flags the specified instances in the managed instance group to be immediately recreated. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.
*/
await gapi.client.instanceGroupManagers.recreateInstances({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  });

/*
Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.

When resizing down, the instance group arbitrarily chooses the order in which VMs are deleted. The group takes into account some VM attributes when making the selection including:

+ The status of the VM instance. + The health of the VM instance. + The instance template version the VM is based on. + For regional managed instance groups, the location of the VM instance.

This list is subject to change.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
*/
await gapi.client.instanceGroupManagers.resize({ instanceGroupManager: "instanceGroupManager", project: "project", size: 1, zone: "zone",  });

/*
Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you recreate them.
*/
await gapi.client.instanceGroupManagers.setInstanceTemplate({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  });

/*
Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
*/
await gapi.client.instanceGroupManagers.setTargetPools({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  });

/*
Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read  Adding instances for more information.
*/
await gapi.client.instanceGroups.addInstances({ instanceGroup: "instanceGroup", project: "project", zone: "zone",  });

/*
Retrieves the list of instance groups and sorts them by zone.
*/
await gapi.client.instanceGroups.aggregatedList({ project: "project",  });

/*
Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read  Deleting an instance group for more information.
*/
await gapi.client.instanceGroups.delete({ instanceGroup: "instanceGroup", project: "project", zone: "zone",  });

/*
Returns the specified instance group. Gets a list of available instance groups by making a list() request.
*/
await gapi.client.instanceGroups.get({ instanceGroup: "instanceGroup", project: "project", zone: "zone",  });

/*
Creates an instance group in the specified project using the parameters that are included in the request.
*/
await gapi.client.instanceGroups.insert({ project: "project", zone: "zone",  });

/*
Retrieves the list of instance groups that are located in the specified project and zone.
*/
await gapi.client.instanceGroups.list({ project: "project", zone: "zone",  });

/*
Lists the instances in the specified instance group.
*/
await gapi.client.instanceGroups.listInstances({ instanceGroup: "instanceGroup", project: "project", zone: "zone",  });

/*
Removes one or more instances from the specified instance group, but does not delete those instances.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.
*/
await gapi.client.instanceGroups.removeInstances({ instanceGroup: "instanceGroup", project: "project", zone: "zone",  });

/*
Sets the named ports for the specified instance group.
*/
await gapi.client.instanceGroups.setNamedPorts({ instanceGroup: "instanceGroup", project: "project", zone: "zone",  });

/*
Adds an access config to an instance's network interface.
*/
await gapi.client.instances.addAccessConfig({ instance: "instance", networkInterface: "networkInterface", project: "project", zone: "zone",  });

/*
Adds existing resource policies to an instance. You can only add one policy right now which will be applied to this instance for scheduling live migrations.
*/
await gapi.client.instances.addResourcePolicies({ instance: "instance", project: "project", zone: "zone",  });

/*
Retrieves aggregated list of all of the instances in your project across all regions and zones.
*/
await gapi.client.instances.aggregatedList({ project: "project",  });

/*
Attaches an existing Disk resource to an instance. You must first create the disk before you can attach it. It is not possible to create and attach a disk at the same time. For more information, read Adding a persistent disk to your instance.
*/
await gapi.client.instances.attachDisk({ instance: "instance", project: "project", zone: "zone",  });

/*
Deletes the specified Instance resource. For more information, see Stopping or Deleting an Instance.
*/
await gapi.client.instances.delete({ instance: "instance", project: "project", zone: "zone",  });

/*
Deletes an access config from an instance's network interface.
*/
await gapi.client.instances.deleteAccessConfig({ accessConfig: "accessConfig", instance: "instance", networkInterface: "networkInterface", project: "project", zone: "zone",  });

/*
Detaches a disk from an instance.
*/
await gapi.client.instances.detachDisk({ deviceName: "deviceName", instance: "instance", project: "project", zone: "zone",  });

/*
Returns the specified Instance resource. Gets a list of available instances by making a list() request.
*/
await gapi.client.instances.get({ instance: "instance", project: "project", zone: "zone",  });

/*
Returns the specified guest attributes entry.
*/
await gapi.client.instances.getGuestAttributes({ instance: "instance", project: "project", zone: "zone",  });

/*
Gets the access control policy for a resource. May be empty if no such policy or resource exists.
*/
await gapi.client.instances.getIamPolicy({ project: "project", resource: "resource", zone: "zone",  });

/*
Returns the last 1 MB of serial port output from the specified instance.
*/
await gapi.client.instances.getSerialPortOutput({ instance: "instance", project: "project", zone: "zone",  });

/*
Returns the Shielded Instance Identity of an instance
*/
await gapi.client.instances.getShieldedInstanceIdentity({ instance: "instance", project: "project", zone: "zone",  });

/*
Creates an instance resource in the specified project using the data included in the request.
*/
await gapi.client.instances.insert({ project: "project", zone: "zone",  });

/*
Retrieves the list of instances contained within the specified zone.
*/
await gapi.client.instances.list({ project: "project", zone: "zone",  });

/*
Retrieves the list of referrers to instances contained within the specified zone. For more information, read Viewing Referrers to VM Instances.
*/
await gapi.client.instances.listReferrers({ instance: "instance", project: "project", zone: "zone",  });

/*
Removes resource policies from an instance.
*/
await gapi.client.instances.removeResourcePolicies({ instance: "instance", project: "project", zone: "zone",  });

/*
Performs a reset on the instance. This is a hard reset the VM does not do a graceful shutdown. For more information, see Resetting an instance.
*/
await gapi.client.instances.reset({ instance: "instance", project: "project", zone: "zone",  });

/*
Sets deletion protection on the instance.
*/
await gapi.client.instances.setDeletionProtection({ project: "project", resource: "resource", zone: "zone",  });

/*
Sets the auto-delete flag for a disk attached to an instance.
*/
await gapi.client.instances.setDiskAutoDelete({ autoDelete: , deviceName: "deviceName", instance: "instance", project: "project", zone: "zone",  });

/*
Sets the access control policy on the specified resource. Replaces any existing policy.
*/
await gapi.client.instances.setIamPolicy({ project: "project", resource: "resource", zone: "zone",  });

/*
Sets labels on an instance. To learn more about labels, read the Labeling Resources documentation.
*/
await gapi.client.instances.setLabels({ instance: "instance", project: "project", zone: "zone",  });

/*
Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.
*/
await gapi.client.instances.setMachineResources({ instance: "instance", project: "project", zone: "zone",  });

/*
Changes the machine type for a stopped instance to the machine type specified in the request.
*/
await gapi.client.instances.setMachineType({ instance: "instance", project: "project", zone: "zone",  });

/*
Sets metadata for the specified instance to the data included in the request.
*/
await gapi.client.instances.setMetadata({ instance: "instance", project: "project", zone: "zone",  });

/*
Changes the minimum CPU platform that this instance should use. This method can only be called on a stopped instance. For more information, read Specifying a Minimum CPU Platform.
*/
await gapi.client.instances.setMinCpuPlatform({ instance: "instance", project: "project", zone: "zone",  });

/*
Sets an instance's scheduling options.
*/
await gapi.client.instances.setScheduling({ instance: "instance", project: "project", zone: "zone",  });

/*
Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.
*/
await gapi.client.instances.setServiceAccount({ instance: "instance", project: "project", zone: "zone",  });

/*
Sets the Shielded Instance integrity policy for an instance. You can only use this method on a running instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.instances.setShieldedInstanceIntegrityPolicy({ instance: "instance", project: "project", zone: "zone",  });

/*
Sets network tags for the specified instance to the data included in the request.
*/
await gapi.client.instances.setTags({ instance: "instance", project: "project", zone: "zone",  });

/*
Simulates a maintenance event on the instance.
*/
await gapi.client.instances.simulateMaintenanceEvent({ instance: "instance", project: "project", zone: "zone",  });

/*
Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.
*/
await gapi.client.instances.start({ instance: "instance", project: "project", zone: "zone",  });

/*
Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.
*/
await gapi.client.instances.startWithEncryptionKey({ instance: "instance", project: "project", zone: "zone",  });

/*
Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur VM usage charges while they are stopped. However, resources that the VM is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.
*/
await gapi.client.instances.stop({ instance: "instance", project: "project", zone: "zone",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.instances.testIamPermissions({ project: "project", resource: "resource", zone: "zone",  });

/*
Updates an instance only if the necessary resources are available. This method can update only a specific set of instance properties. See  Updating a running instance for a list of updatable instance properties.
*/
await gapi.client.instances.update({ instance: "instance", project: "project", zone: "zone",  });

/*
Updates the specified access config from an instance's network interface with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.instances.updateAccessConfig({ instance: "instance", networkInterface: "networkInterface", project: "project", zone: "zone",  });

/*
Updates the Display config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.instances.updateDisplayDevice({ instance: "instance", project: "project", zone: "zone",  });

/*
Updates an instance's network interface. This method follows PATCH semantics.
*/
await gapi.client.instances.updateNetworkInterface({ instance: "instance", networkInterface: "networkInterface", project: "project", zone: "zone",  });

/*
Updates the Shielded Instance config for an instance. You can only use this method on a stopped instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.instances.updateShieldedInstanceConfig({ instance: "instance", project: "project", zone: "zone",  });

/*
Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone. It is not possible to delete templates that are already in use by a managed instance group.
*/
await gapi.client.instanceTemplates.delete({ instanceTemplate: "instanceTemplate", project: "project",  });

/*
Returns the specified instance template. Gets a list of available instance templates by making a list() request.
*/
await gapi.client.instanceTemplates.get({ instanceTemplate: "instanceTemplate", project: "project",  });

/*
Gets the access control policy for a resource. May be empty if no such policy or resource exists.
*/
await gapi.client.instanceTemplates.getIamPolicy({ project: "project", resource: "resource",  });

/*
Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.
*/
await gapi.client.instanceTemplates.insert({ project: "project",  });

/*
Retrieves a list of instance templates that are contained within the specified project.
*/
await gapi.client.instanceTemplates.list({ project: "project",  });

/*
Sets the access control policy on the specified resource. Replaces any existing policy.
*/
await gapi.client.instanceTemplates.setIamPolicy({ project: "project", resource: "resource",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.instanceTemplates.testIamPermissions({ project: "project", resource: "resource",  });

/*
Retrieves an aggregated list of interconnect attachments.
*/
await gapi.client.interconnectAttachments.aggregatedList({ project: "project",  });

/*
Deletes the specified interconnect attachment.
*/
await gapi.client.interconnectAttachments.delete({ interconnectAttachment: "interconnectAttachment", project: "project", region: "region",  });

/*
Returns the specified interconnect attachment.
*/
await gapi.client.interconnectAttachments.get({ interconnectAttachment: "interconnectAttachment", project: "project", region: "region",  });

/*
Creates an InterconnectAttachment in the specified project using the data included in the request.
*/
await gapi.client.interconnectAttachments.insert({ project: "project", region: "region",  });

/*
Retrieves the list of interconnect attachments contained within the specified region.
*/
await gapi.client.interconnectAttachments.list({ project: "project", region: "region",  });

/*
Updates the specified interconnect attachment with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.interconnectAttachments.patch({ interconnectAttachment: "interconnectAttachment", project: "project", region: "region",  });

/*
Returns the details for the specified interconnect location. Gets a list of available interconnect locations by making a list() request.
*/
await gapi.client.interconnectLocations.get({ interconnectLocation: "interconnectLocation", project: "project",  });

/*
Retrieves the list of interconnect locations available to the specified project.
*/
await gapi.client.interconnectLocations.list({ project: "project",  });

/*
Deletes the specified interconnect.
*/
await gapi.client.interconnects.delete({ interconnect: "interconnect", project: "project",  });

/*
Returns the specified interconnect. Get a list of available interconnects by making a list() request.
*/
await gapi.client.interconnects.get({ interconnect: "interconnect", project: "project",  });

/*
Returns the interconnectDiagnostics for the specified interconnect.
*/
await gapi.client.interconnects.getDiagnostics({ interconnect: "interconnect", project: "project",  });

/*
Creates a Interconnect in the specified project using the data included in the request.
*/
await gapi.client.interconnects.insert({ project: "project",  });

/*
Retrieves the list of interconnect available to the specified project.
*/
await gapi.client.interconnects.list({ project: "project",  });

/*
Updates the specified interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.interconnects.patch({ interconnect: "interconnect", project: "project",  });

/*
Return a specified license code. License codes are mirrored across all projects that have permissions to read the License Code.  Caution This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
*/
await gapi.client.licenseCodes.get({ licenseCode: "licenseCode", project: "project",  });

/*
Returns permissions that a caller has on the specified resource.  Caution This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
*/
await gapi.client.licenseCodes.testIamPermissions({ project: "project", resource: "resource",  });

/*
Deletes the specified license.  Caution This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
*/
await gapi.client.licenses.delete({ license: "license", project: "project",  });

/*
Returns the specified License resource.  Caution This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
*/
await gapi.client.licenses.get({ license: "license", project: "project",  });

/*
Gets the access control policy for a resource. May be empty if no such policy or resource exists.  Caution This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
*/
await gapi.client.licenses.getIamPolicy({ project: "project", resource: "resource",  });

/*
Create a License resource in the specified project.  Caution This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
*/
await gapi.client.licenses.insert({ project: "project",  });

/*
Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.  Caution This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
*/
await gapi.client.licenses.list({ project: "project",  });

/*
Sets the access control policy on the specified resource. Replaces any existing policy.  Caution This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
*/
await gapi.client.licenses.setIamPolicy({ project: "project", resource: "resource",  });

/*
Returns permissions that a caller has on the specified resource.  Caution This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
*/
await gapi.client.licenses.testIamPermissions({ project: "project", resource: "resource",  });

/*
Retrieves an aggregated list of machine types.
*/
await gapi.client.machineTypes.aggregatedList({ project: "project",  });

/*
Returns the specified machine type. Gets a list of available machine types by making a list() request.
*/
await gapi.client.machineTypes.get({ machineType: "machineType", project: "project", zone: "zone",  });

/*
Retrieves a list of machine types available to the specified project.
*/
await gapi.client.machineTypes.list({ project: "project", zone: "zone",  });

/*
Retrieves the list of network endpoint groups and sorts them by zone.
*/
await gapi.client.networkEndpointGroups.aggregatedList({ project: "project",  });

/*
Attach a list of network endpoints to the specified network endpoint group.
*/
await gapi.client.networkEndpointGroups.attachNetworkEndpoints({ networkEndpointGroup: "networkEndpointGroup", project: "project", zone: "zone",  });

/*
Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.
*/
await gapi.client.networkEndpointGroups.delete({ networkEndpointGroup: "networkEndpointGroup", project: "project", zone: "zone",  });

/*
Detach a list of network endpoints from the specified network endpoint group.
*/
await gapi.client.networkEndpointGroups.detachNetworkEndpoints({ networkEndpointGroup: "networkEndpointGroup", project: "project", zone: "zone",  });

/*
Returns the specified network endpoint group. Gets a list of available network endpoint groups by making a list() request.
*/
await gapi.client.networkEndpointGroups.get({ networkEndpointGroup: "networkEndpointGroup", project: "project", zone: "zone",  });

/*
Creates a network endpoint group in the specified project using the parameters that are included in the request.
*/
await gapi.client.networkEndpointGroups.insert({ project: "project", zone: "zone",  });

/*
Retrieves the list of network endpoint groups that are located in the specified project and zone.
*/
await gapi.client.networkEndpointGroups.list({ project: "project", zone: "zone",  });

/*
Lists the network endpoints in the specified network endpoint group.
*/
await gapi.client.networkEndpointGroups.listNetworkEndpoints({ networkEndpointGroup: "networkEndpointGroup", project: "project", zone: "zone",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.networkEndpointGroups.testIamPermissions({ project: "project", resource: "resource", zone: "zone",  });

/*
Adds a peering to the specified network.
*/
await gapi.client.networks.addPeering({ network: "network", project: "project",  });

/*
Deletes the specified network.
*/
await gapi.client.networks.delete({ network: "network", project: "project",  });

/*
Returns the specified network. Gets a list of available networks by making a list() request.
*/
await gapi.client.networks.get({ network: "network", project: "project",  });

/*
Creates a network in the specified project using the data included in the request.
*/
await gapi.client.networks.insert({ project: "project",  });

/*
Retrieves the list of networks available to the specified project.
*/
await gapi.client.networks.list({ project: "project",  });

/*
Lists the peering routes exchanged over peering connection.
*/
await gapi.client.networks.listPeeringRoutes({ network: "network", project: "project",  });

/*
Patches the specified network with the data included in the request. Only the following fields can be modified: routingConfig.routingMode.
*/
await gapi.client.networks.patch({ network: "network", project: "project",  });

/*
Removes a peering from the specified network.
*/
await gapi.client.networks.removePeering({ network: "network", project: "project",  });

/*
Switches the network mode from auto subnet mode to custom subnet mode.
*/
await gapi.client.networks.switchToCustomMode({ network: "network", project: "project",  });

/*
Updates the specified network peering with the data included in the request Only the following fields can be modified: NetworkPeering.export_custom_routes, and NetworkPeering.import_custom_routes
*/
await gapi.client.networks.updatePeering({ network: "network", project: "project",  });

/*
Adds specified number of nodes to the node group.
*/
await gapi.client.nodeGroups.addNodes({ nodeGroup: "nodeGroup", project: "project", zone: "zone",  });

/*
Retrieves an aggregated list of node groups. Note: use nodeGroups.listNodes for more details about each group.
*/
await gapi.client.nodeGroups.aggregatedList({ project: "project",  });

/*
Deletes the specified NodeGroup resource.
*/
await gapi.client.nodeGroups.delete({ nodeGroup: "nodeGroup", project: "project", zone: "zone",  });

/*
Deletes specified nodes from the node group.
*/
await gapi.client.nodeGroups.deleteNodes({ nodeGroup: "nodeGroup", project: "project", zone: "zone",  });

/*
Returns the specified NodeGroup. Get a list of available NodeGroups by making a list() request. Note: the "nodes" field should not be used. Use nodeGroups.listNodes instead.
*/
await gapi.client.nodeGroups.get({ nodeGroup: "nodeGroup", project: "project", zone: "zone",  });

/*
Gets the access control policy for a resource. May be empty if no such policy or resource exists.
*/
await gapi.client.nodeGroups.getIamPolicy({ project: "project", resource: "resource", zone: "zone",  });

/*
Creates a NodeGroup resource in the specified project using the data included in the request.
*/
await gapi.client.nodeGroups.insert({ initialNodeCount: 1, project: "project", zone: "zone",  });

/*
Retrieves a list of node groups available to the specified project. Note: use nodeGroups.listNodes for more details about each group.
*/
await gapi.client.nodeGroups.list({ project: "project", zone: "zone",  });

/*
Lists nodes in the node group.
*/
await gapi.client.nodeGroups.listNodes({ nodeGroup: "nodeGroup", project: "project", zone: "zone",  });

/*
Patch the node group.
*/
await gapi.client.nodeGroups.patch({ nodeGroup: "nodeGroup", project: "project", zone: "zone",  });

/*
Sets the access control policy on the specified resource. Replaces any existing policy.
*/
await gapi.client.nodeGroups.setIamPolicy({ project: "project", resource: "resource", zone: "zone",  });

/*
Updates the node template of the node group.
*/
await gapi.client.nodeGroups.setNodeTemplate({ nodeGroup: "nodeGroup", project: "project", zone: "zone",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.nodeGroups.testIamPermissions({ project: "project", resource: "resource", zone: "zone",  });

/*
Retrieves an aggregated list of node templates.
*/
await gapi.client.nodeTemplates.aggregatedList({ project: "project",  });

/*
Deletes the specified NodeTemplate resource.
*/
await gapi.client.nodeTemplates.delete({ nodeTemplate: "nodeTemplate", project: "project", region: "region",  });

/*
Returns the specified node template. Gets a list of available node templates by making a list() request.
*/
await gapi.client.nodeTemplates.get({ nodeTemplate: "nodeTemplate", project: "project", region: "region",  });

/*
Gets the access control policy for a resource. May be empty if no such policy or resource exists.
*/
await gapi.client.nodeTemplates.getIamPolicy({ project: "project", region: "region", resource: "resource",  });

/*
Creates a NodeTemplate resource in the specified project using the data included in the request.
*/
await gapi.client.nodeTemplates.insert({ project: "project", region: "region",  });

/*
Retrieves a list of node templates available to the specified project.
*/
await gapi.client.nodeTemplates.list({ project: "project", region: "region",  });

/*
Sets the access control policy on the specified resource. Replaces any existing policy.
*/
await gapi.client.nodeTemplates.setIamPolicy({ project: "project", region: "region", resource: "resource",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.nodeTemplates.testIamPermissions({ project: "project", region: "region", resource: "resource",  });

/*
Retrieves an aggregated list of node types.
*/
await gapi.client.nodeTypes.aggregatedList({ project: "project",  });

/*
Returns the specified node type. Gets a list of available node types by making a list() request.
*/
await gapi.client.nodeTypes.get({ nodeType: "nodeType", project: "project", zone: "zone",  });

/*
Retrieves a list of node types available to the specified project.
*/
await gapi.client.nodeTypes.list({ project: "project", zone: "zone",  });

/*
Retrieves an aggregated list of packetMirrorings.
*/
await gapi.client.packetMirrorings.aggregatedList({ project: "project",  });

/*
Deletes the specified PacketMirroring resource.
*/
await gapi.client.packetMirrorings.delete({ packetMirroring: "packetMirroring", project: "project", region: "region",  });

/*
Returns the specified PacketMirroring resource.
*/
await gapi.client.packetMirrorings.get({ packetMirroring: "packetMirroring", project: "project", region: "region",  });

/*
Creates a PacketMirroring resource in the specified project and region using the data included in the request.
*/
await gapi.client.packetMirrorings.insert({ project: "project", region: "region",  });

/*
Retrieves a list of PacketMirroring resources available to the specified project and region.
*/
await gapi.client.packetMirrorings.list({ project: "project", region: "region",  });

/*
Patches the specified PacketMirroring resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
*/
await gapi.client.packetMirrorings.patch({ packetMirroring: "packetMirroring", project: "project", region: "region",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.packetMirrorings.testIamPermissions({ project: "project", region: "region", resource: "resource",  });

/*
Disable this project as a shared VPC host project.
*/
await gapi.client.projects.disableXpnHost({ project: "project",  });

/*
Disable a service resource (also known as service project) associated with this host project.
*/
await gapi.client.projects.disableXpnResource({ project: "project",  });

/*
Enable this project as a shared VPC host project.
*/
await gapi.client.projects.enableXpnHost({ project: "project",  });

/*
Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service project.
*/
await gapi.client.projects.enableXpnResource({ project: "project",  });

/*
Returns the specified Project resource.
*/
await gapi.client.projects.get({ project: "project",  });

/*
Gets the shared VPC host project that this project links to. May be empty if no link exists.
*/
await gapi.client.projects.getXpnHost({ project: "project",  });

/*
Gets service resources (a.k.a service project) associated with this host project.
*/
await gapi.client.projects.getXpnResources({ project: "project",  });

/*
Lists all shared VPC host projects visible to the user in an organization.
*/
await gapi.client.projects.listXpnHosts({ project: "project",  });

/*
Moves a persistent disk from one zone to another.
*/
await gapi.client.projects.moveDisk({ project: "project",  });

/*
Moves an instance and its attached persistent disks from one zone to another.
*/
await gapi.client.projects.moveInstance({ project: "project",  });

/*
Sets metadata common to all instances within the specified project using the data included in the request.
*/
await gapi.client.projects.setCommonInstanceMetadata({ project: "project",  });

/*
Sets the default network tier of the project. The default network tier is used when an address/forwardingRule/instance is created without specifying the network tier field.
*/
await gapi.client.projects.setDefaultNetworkTier({ project: "project",  });

/*
Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.
*/
await gapi.client.projects.setUsageExportBucket({ project: "project",  });

/*
Deletes the specified autoscaler.
*/
await gapi.client.regionAutoscalers.delete({ autoscaler: "autoscaler", project: "project", region: "region",  });

/*
Returns the specified autoscaler.
*/
await gapi.client.regionAutoscalers.get({ autoscaler: "autoscaler", project: "project", region: "region",  });

/*
Creates an autoscaler in the specified project using the data included in the request.
*/
await gapi.client.regionAutoscalers.insert({ project: "project", region: "region",  });

/*
Retrieves a list of autoscalers contained within the specified region.
*/
await gapi.client.regionAutoscalers.list({ project: "project", region: "region",  });

/*
Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.regionAutoscalers.patch({ project: "project", region: "region",  });

/*
Updates an autoscaler in the specified project using the data included in the request.
*/
await gapi.client.regionAutoscalers.update({ project: "project", region: "region",  });

/*
Deletes the specified regional BackendService resource.
*/
await gapi.client.regionBackendServices.delete({ backendService: "backendService", project: "project", region: "region",  });

/*
Returns the specified regional BackendService resource.
*/
await gapi.client.regionBackendServices.get({ backendService: "backendService", project: "project", region: "region",  });

/*
Gets the most recent health check results for this regional BackendService.
*/
await gapi.client.regionBackendServices.getHealth({ backendService: "backendService", project: "project", region: "region",  });

/*
Creates a regional BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a regional backend service. Read  Understanding backend services for more information.
*/
await gapi.client.regionBackendServices.insert({ project: "project", region: "region",  });

/*
Retrieves the list of regional BackendService resources available to the specified project in the given region.
*/
await gapi.client.regionBackendServices.list({ project: "project", region: "region",  });

/*
Updates the specified regional BackendService resource with the data included in the request. There are several Understanding backend services to keep in mind when updating a backend service. Read  Understanding backend services for more information. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.regionBackendServices.patch({ backendService: "backendService", project: "project", region: "region",  });

/*
Updates the specified regional BackendService resource with the data included in the request. There are several Understanding backend services to keep in mind when updating a backend service. Read  Understanding backend services for more information.
*/
await gapi.client.regionBackendServices.update({ backendService: "backendService", project: "project", region: "region",  });

/*
Retrieves an aggregated list of commitments.
*/
await gapi.client.regionCommitments.aggregatedList({ project: "project",  });

/*
Returns the specified commitment resource. Gets a list of available commitments by making a list() request.
*/
await gapi.client.regionCommitments.get({ commitment: "commitment", project: "project", region: "region",  });

/*
Creates a commitment in the specified project using the data included in the request.
*/
await gapi.client.regionCommitments.insert({ project: "project", region: "region",  });

/*
Retrieves a list of commitments contained within the specified region.
*/
await gapi.client.regionCommitments.list({ project: "project", region: "region",  });

/*
Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
*/
await gapi.client.regionDisks.addResourcePolicies({ disk: "disk", project: "project", region: "region",  });

/*
Creates a snapshot of this regional disk.
*/
await gapi.client.regionDisks.createSnapshot({ disk: "disk", project: "project", region: "region",  });

/*
Deletes the specified regional persistent disk. Deleting a regional disk removes all the replicas of its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
*/
await gapi.client.regionDisks.delete({ disk: "disk", project: "project", region: "region",  });

/*
Returns a specified regional persistent disk.
*/
await gapi.client.regionDisks.get({ disk: "disk", project: "project", region: "region",  });

/*
Creates a persistent regional disk in the specified project using the data included in the request.
*/
await gapi.client.regionDisks.insert({ project: "project", region: "region",  });

/*
Retrieves the list of persistent disks contained within the specified region.
*/
await gapi.client.regionDisks.list({ project: "project", region: "region",  });

/*
Removes resource policies from a regional disk.
*/
await gapi.client.regionDisks.removeResourcePolicies({ disk: "disk", project: "project", region: "region",  });

/*
Resizes the specified regional persistent disk.
*/
await gapi.client.regionDisks.resize({ disk: "disk", project: "project", region: "region",  });

/*
Sets the labels on the target regional disk.
*/
await gapi.client.regionDisks.setLabels({ project: "project", region: "region", resource: "resource",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.regionDisks.testIamPermissions({ project: "project", region: "region", resource: "resource",  });

/*
Returns the specified regional disk type. Gets a list of available disk types by making a list() request.
*/
await gapi.client.regionDiskTypes.get({ diskType: "diskType", project: "project", region: "region",  });

/*
Retrieves a list of regional disk types available to the specified project.
*/
await gapi.client.regionDiskTypes.list({ project: "project", region: "region",  });

/*
Deletes the specified HealthCheck resource.
*/
await gapi.client.regionHealthChecks.delete({ healthCheck: "healthCheck", project: "project", region: "region",  });

/*
Returns the specified HealthCheck resource. Gets a list of available health checks by making a list() request.
*/
await gapi.client.regionHealthChecks.get({ healthCheck: "healthCheck", project: "project", region: "region",  });

/*
Creates a HealthCheck resource in the specified project using the data included in the request.
*/
await gapi.client.regionHealthChecks.insert({ project: "project", region: "region",  });

/*
Retrieves the list of HealthCheck resources available to the specified project.
*/
await gapi.client.regionHealthChecks.list({ project: "project", region: "region",  });

/*
Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.regionHealthChecks.patch({ healthCheck: "healthCheck", project: "project", region: "region",  });

/*
Updates a HealthCheck resource in the specified project using the data included in the request.
*/
await gapi.client.regionHealthChecks.update({ healthCheck: "healthCheck", project: "project", region: "region",  });

/*
Flags the specified instances to be immediately removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.
*/
await gapi.client.regionInstanceGroupManagers.abandonInstances({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  });

/*
Apply updates to selected instances the managed instance group.
*/
await gapi.client.regionInstanceGroupManagers.applyUpdatesToInstances({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  });

/*
Creates instances with per-instance configs in this regional managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.
*/
await gapi.client.regionInstanceGroupManagers.createInstances({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  });

/*
Deletes the specified managed instance group and all of the instances in that group.
*/
await gapi.client.regionInstanceGroupManagers.delete({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  });

/*
Flags the specified instances in the managed instance group to be immediately deleted. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. The deleteInstances operation is marked DONE if the deleteInstances request is successful. The underlying actions take additional time. You must separately verify the status of the deleting action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.
*/
await gapi.client.regionInstanceGroupManagers.deleteInstances({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  });

/*
Returns all of the details about the specified managed instance group.
*/
await gapi.client.regionInstanceGroupManagers.get({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  });

/*
Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.

A regional managed instance group can contain up to 2000 instances.
*/
await gapi.client.regionInstanceGroupManagers.insert({ project: "project", region: "region",  });

/*
Retrieves the list of managed instance groups that are contained within the specified region.
*/
await gapi.client.regionInstanceGroupManagers.list({ project: "project", region: "region",  });

/*
Lists all errors thrown by actions on instances for a given regional managed instance group.
*/
await gapi.client.regionInstanceGroupManagers.listErrors({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  });

/*
Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances.
*/
await gapi.client.regionInstanceGroupManagers.listManagedInstances({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  });

/*
Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listmanagedinstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.regionInstanceGroupManagers.patch({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  });

/*
Flags the specified instances in the managed instance group to be immediately recreated. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.
*/
await gapi.client.regionInstanceGroupManagers.recreateInstances({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  });

/*
Changes the intended size of the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances.

The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
*/
await gapi.client.regionInstanceGroupManagers.resize({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region", size: 1,  });

/*
Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.
*/
await gapi.client.regionInstanceGroupManagers.setInstanceTemplate({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  });

/*
Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
*/
await gapi.client.regionInstanceGroupManagers.setTargetPools({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  });

/*
Returns the specified instance group resource.
*/
await gapi.client.regionInstanceGroups.get({ instanceGroup: "instanceGroup", project: "project", region: "region",  });

/*
Retrieves the list of instance group resources contained within the specified region.
*/
await gapi.client.regionInstanceGroups.list({ project: "project", region: "region",  });

/*
Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running.
*/
await gapi.client.regionInstanceGroups.listInstances({ instanceGroup: "instanceGroup", project: "project", region: "region",  });

/*
Sets the named ports for the specified regional instance group.
*/
await gapi.client.regionInstanceGroups.setNamedPorts({ instanceGroup: "instanceGroup", project: "project", region: "region",  });

/*
Deletes the specified region-specific Operations resource.
*/
await gapi.client.regionOperations.delete({ operation: "operation", project: "project", region: "region",  });

/*
Retrieves the specified region-specific Operations resource.
*/
await gapi.client.regionOperations.get({ operation: "operation", project: "project", region: "region",  });

/*
Retrieves a list of Operation resources contained within the specified region.
*/
await gapi.client.regionOperations.list({ project: "project", region: "region",  });

/*
Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress.

This method is called on a best-effort basis. Specifically:  
- In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. 
- If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`.
*/
await gapi.client.regionOperations.wait({ operation: "operation", project: "project", region: "region",  });

/*
Returns the specified Region resource. Gets a list of available regions by making a list() request.
*/
await gapi.client.regions.get({ project: "project", region: "region",  });

/*
Retrieves the list of region resources available to the specified project.
*/
await gapi.client.regions.list({ project: "project",  });

/*
Deletes the specified SslCertificate resource in the region.
*/
await gapi.client.regionSslCertificates.delete({ project: "project", region: "region", sslCertificate: "sslCertificate",  });

/*
Returns the specified SslCertificate resource in the specified region. Get a list of available SSL certificates by making a list() request.
*/
await gapi.client.regionSslCertificates.get({ project: "project", region: "region", sslCertificate: "sslCertificate",  });

/*
Creates a SslCertificate resource in the specified project and region using the data included in the request
*/
await gapi.client.regionSslCertificates.insert({ project: "project", region: "region",  });

/*
Retrieves the list of SslCertificate resources available to the specified project in the specified region.
*/
await gapi.client.regionSslCertificates.list({ project: "project", region: "region",  });

/*
Deletes the specified TargetHttpProxy resource.
*/
await gapi.client.regionTargetHttpProxies.delete({ project: "project", region: "region", targetHttpProxy: "targetHttpProxy",  });

/*
Returns the specified TargetHttpProxy resource in the specified region. Gets a list of available target HTTP proxies by making a list() request.
*/
await gapi.client.regionTargetHttpProxies.get({ project: "project", region: "region", targetHttpProxy: "targetHttpProxy",  });

/*
Creates a TargetHttpProxy resource in the specified project and region using the data included in the request.
*/
await gapi.client.regionTargetHttpProxies.insert({ project: "project", region: "region",  });

/*
Retrieves the list of TargetHttpProxy resources available to the specified project in the specified region.
*/
await gapi.client.regionTargetHttpProxies.list({ project: "project", region: "region",  });

/*
Changes the URL map for TargetHttpProxy.
*/
await gapi.client.regionTargetHttpProxies.setUrlMap({ project: "project", region: "region", targetHttpProxy: "targetHttpProxy",  });

/*
Deletes the specified TargetHttpsProxy resource.
*/
await gapi.client.regionTargetHttpsProxies.delete({ project: "project", region: "region", targetHttpsProxy: "targetHttpsProxy",  });

/*
Returns the specified TargetHttpsProxy resource in the specified region. Gets a list of available target HTTP proxies by making a list() request.
*/
await gapi.client.regionTargetHttpsProxies.get({ project: "project", region: "region", targetHttpsProxy: "targetHttpsProxy",  });

/*
Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.
*/
await gapi.client.regionTargetHttpsProxies.insert({ project: "project", region: "region",  });

/*
Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.
*/
await gapi.client.regionTargetHttpsProxies.list({ project: "project", region: "region",  });

/*
Replaces SslCertificates for TargetHttpsProxy.
*/
await gapi.client.regionTargetHttpsProxies.setSslCertificates({ project: "project", region: "region", targetHttpsProxy: "targetHttpsProxy",  });

/*
Changes the URL map for TargetHttpsProxy.
*/
await gapi.client.regionTargetHttpsProxies.setUrlMap({ project: "project", region: "region", targetHttpsProxy: "targetHttpsProxy",  });

/*
Deletes the specified UrlMap resource.
*/
await gapi.client.regionUrlMaps.delete({ project: "project", region: "region", urlMap: "urlMap",  });

/*
Returns the specified UrlMap resource. Gets a list of available URL maps by making a list() request.
*/
await gapi.client.regionUrlMaps.get({ project: "project", region: "region", urlMap: "urlMap",  });

/*
Creates a UrlMap resource in the specified project using the data included in the request.
*/
await gapi.client.regionUrlMaps.insert({ project: "project", region: "region",  });

/*
Retrieves the list of UrlMap resources available to the specified project in the specified region.
*/
await gapi.client.regionUrlMaps.list({ project: "project", region: "region",  });

/*
Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
*/
await gapi.client.regionUrlMaps.patch({ project: "project", region: "region", urlMap: "urlMap",  });

/*
Updates the specified UrlMap resource with the data included in the request.
*/
await gapi.client.regionUrlMaps.update({ project: "project", region: "region", urlMap: "urlMap",  });

/*
Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.
*/
await gapi.client.regionUrlMaps.validate({ project: "project", region: "region", urlMap: "urlMap",  });

/*
Retrieves an aggregated list of reservations.
*/
await gapi.client.reservations.aggregatedList({ project: "project",  });

/*
Deletes the specified reservation.
*/
await gapi.client.reservations.delete({ project: "project", reservation: "reservation", zone: "zone",  });

/*
Retrieves information about the specified reservation.
*/
await gapi.client.reservations.get({ project: "project", reservation: "reservation", zone: "zone",  });

/*
Gets the access control policy for a resource. May be empty if no such policy or resource exists.
*/
await gapi.client.reservations.getIamPolicy({ project: "project", resource: "resource", zone: "zone",  });

/*
Creates a new reservation. For more information, read Reserving zonal resources.
*/
await gapi.client.reservations.insert({ project: "project", zone: "zone",  });

/*
A list of all the reservations that have been configured for the specified project in specified zone.
*/
await gapi.client.reservations.list({ project: "project", zone: "zone",  });

/*
Resizes the reservation (applicable to standalone reservations only). For more information, read Modifying reservations.
*/
await gapi.client.reservations.resize({ project: "project", reservation: "reservation", zone: "zone",  });

/*
Sets the access control policy on the specified resource. Replaces any existing policy.
*/
await gapi.client.reservations.setIamPolicy({ project: "project", resource: "resource", zone: "zone",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.reservations.testIamPermissions({ project: "project", resource: "resource", zone: "zone",  });

/*
Retrieves an aggregated list of resource policies.
*/
await gapi.client.resourcePolicies.aggregatedList({ project: "project",  });

/*
Deletes the specified resource policy.
*/
await gapi.client.resourcePolicies.delete({ project: "project", region: "region", resourcePolicy: "resourcePolicy",  });

/*
Retrieves all information of the specified resource policy.
*/
await gapi.client.resourcePolicies.get({ project: "project", region: "region", resourcePolicy: "resourcePolicy",  });

/*
Gets the access control policy for a resource. May be empty if no such policy or resource exists.
*/
await gapi.client.resourcePolicies.getIamPolicy({ project: "project", region: "region", resource: "resource",  });

/*
Creates a new resource policy.
*/
await gapi.client.resourcePolicies.insert({ project: "project", region: "region",  });

/*
A list all the resource policies that have been configured for the specified project in specified region.
*/
await gapi.client.resourcePolicies.list({ project: "project", region: "region",  });

/*
Sets the access control policy on the specified resource. Replaces any existing policy.
*/
await gapi.client.resourcePolicies.setIamPolicy({ project: "project", region: "region", resource: "resource",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.resourcePolicies.testIamPermissions({ project: "project", region: "region", resource: "resource",  });

/*
Retrieves an aggregated list of routers.
*/
await gapi.client.routers.aggregatedList({ project: "project",  });

/*
Deletes the specified Router resource.
*/
await gapi.client.routers.delete({ project: "project", region: "region", router: "router",  });

/*
Returns the specified Router resource. Gets a list of available routers by making a list() request.
*/
await gapi.client.routers.get({ project: "project", region: "region", router: "router",  });

/*
Retrieves runtime Nat mapping information of VM endpoints.
*/
await gapi.client.routers.getNatMappingInfo({ project: "project", region: "region", router: "router",  });

/*
Retrieves runtime information of the specified router.
*/
await gapi.client.routers.getRouterStatus({ project: "project", region: "region", router: "router",  });

/*
Creates a Router resource in the specified project and region using the data included in the request.
*/
await gapi.client.routers.insert({ project: "project", region: "region",  });

/*
Retrieves a list of Router resources available to the specified project.
*/
await gapi.client.routers.list({ project: "project", region: "region",  });

/*
Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
*/
await gapi.client.routers.patch({ project: "project", region: "region", router: "router",  });

/*
Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.
*/
await gapi.client.routers.preview({ project: "project", region: "region", router: "router",  });

/*
Updates the specified Router resource with the data included in the request. This method conforms to PUT semantics, which requests that the state of the target resource be created or replaced with the state defined by the representation enclosed in the request message payload.
*/
await gapi.client.routers.update({ project: "project", region: "region", router: "router",  });

/*
Deletes the specified Route resource.
*/
await gapi.client.routes.delete({ project: "project", route: "route",  });

/*
Returns the specified Route resource. Gets a list of available routes by making a list() request.
*/
await gapi.client.routes.get({ project: "project", route: "route",  });

/*
Creates a Route resource in the specified project using the data included in the request.
*/
await gapi.client.routes.insert({ project: "project",  });

/*
Retrieves the list of Route resources available to the specified project.
*/
await gapi.client.routes.list({ project: "project",  });

/*
Inserts a rule into a security policy.
*/
await gapi.client.securityPolicies.addRule({ project: "project", securityPolicy: "securityPolicy",  });

/*
Deletes the specified policy.
*/
await gapi.client.securityPolicies.delete({ project: "project", securityPolicy: "securityPolicy",  });

/*
List all of the ordered rules present in a single specified policy.
*/
await gapi.client.securityPolicies.get({ project: "project", securityPolicy: "securityPolicy",  });

/*
Gets a rule at the specified priority.
*/
await gapi.client.securityPolicies.getRule({ project: "project", securityPolicy: "securityPolicy",  });

/*
Creates a new policy in the specified project using the data included in the request.
*/
await gapi.client.securityPolicies.insert({ project: "project",  });

/*
List all the policies that have been configured for the specified project.
*/
await gapi.client.securityPolicies.list({ project: "project",  });

/*
Gets the current list of preconfigured Web Application Firewall (WAF) expressions.
*/
await gapi.client.securityPolicies.listPreconfiguredExpressionSets({ project: "project",  });

/*
Patches the specified policy with the data included in the request.
*/
await gapi.client.securityPolicies.patch({ project: "project", securityPolicy: "securityPolicy",  });

/*
Patches a rule at the specified priority.
*/
await gapi.client.securityPolicies.patchRule({ project: "project", securityPolicy: "securityPolicy",  });

/*
Deletes a rule at the specified priority.
*/
await gapi.client.securityPolicies.removeRule({ project: "project", securityPolicy: "securityPolicy",  });

/*
Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot.

For more information, see Deleting snapshots.
*/
await gapi.client.snapshots.delete({ project: "project", snapshot: "snapshot",  });

/*
Returns the specified Snapshot resource. Gets a list of available snapshots by making a list() request.
*/
await gapi.client.snapshots.get({ project: "project", snapshot: "snapshot",  });

/*
Gets the access control policy for a resource. May be empty if no such policy or resource exists.
*/
await gapi.client.snapshots.getIamPolicy({ project: "project", resource: "resource",  });

/*
Retrieves the list of Snapshot resources contained within the specified project.
*/
await gapi.client.snapshots.list({ project: "project",  });

/*
Sets the access control policy on the specified resource. Replaces any existing policy.
*/
await gapi.client.snapshots.setIamPolicy({ project: "project", resource: "resource",  });

/*
Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.
*/
await gapi.client.snapshots.setLabels({ project: "project", resource: "resource",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.snapshots.testIamPermissions({ project: "project", resource: "resource",  });

/*
Retrieves the list of all SslCertificate resources, regional and global, available to the specified project.
*/
await gapi.client.sslCertificates.aggregatedList({ project: "project",  });

/*
Deletes the specified SslCertificate resource.
*/
await gapi.client.sslCertificates.delete({ project: "project", sslCertificate: "sslCertificate",  });

/*
Returns the specified SslCertificate resource. Gets a list of available SSL certificates by making a list() request.
*/
await gapi.client.sslCertificates.get({ project: "project", sslCertificate: "sslCertificate",  });

/*
Creates a SslCertificate resource in the specified project using the data included in the request.
*/
await gapi.client.sslCertificates.insert({ project: "project",  });

/*
Retrieves the list of SslCertificate resources available to the specified project.
*/
await gapi.client.sslCertificates.list({ project: "project",  });

/*
Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
*/
await gapi.client.sslPolicies.delete({ project: "project", sslPolicy: "sslPolicy",  });

/*
Lists all of the ordered rules present in a single specified policy.
*/
await gapi.client.sslPolicies.get({ project: "project", sslPolicy: "sslPolicy",  });

/*
Returns the specified SSL policy resource. Gets a list of available SSL policies by making a list() request.
*/
await gapi.client.sslPolicies.insert({ project: "project",  });

/*
Lists all the SSL policies that have been configured for the specified project.
*/
await gapi.client.sslPolicies.list({ project: "project",  });

/*
Lists all features that can be specified in the SSL policy when using custom profile.
*/
await gapi.client.sslPolicies.listAvailableFeatures({ project: "project",  });

/*
Patches the specified SSL policy with the data included in the request.
*/
await gapi.client.sslPolicies.patch({ project: "project", sslPolicy: "sslPolicy",  });

/*
Retrieves an aggregated list of subnetworks.
*/
await gapi.client.subnetworks.aggregatedList({ project: "project",  });

/*
Deletes the specified subnetwork.
*/
await gapi.client.subnetworks.delete({ project: "project", region: "region", subnetwork: "subnetwork",  });

/*
Expands the IP CIDR range of the subnetwork to a specified value.
*/
await gapi.client.subnetworks.expandIpCidrRange({ project: "project", region: "region", subnetwork: "subnetwork",  });

/*
Returns the specified subnetwork. Gets a list of available subnetworks list() request.
*/
await gapi.client.subnetworks.get({ project: "project", region: "region", subnetwork: "subnetwork",  });

/*
Gets the access control policy for a resource. May be empty if no such policy or resource exists.
*/
await gapi.client.subnetworks.getIamPolicy({ project: "project", region: "region", resource: "resource",  });

/*
Creates a subnetwork in the specified project using the data included in the request.
*/
await gapi.client.subnetworks.insert({ project: "project", region: "region",  });

/*
Retrieves a list of subnetworks available to the specified project.
*/
await gapi.client.subnetworks.list({ project: "project", region: "region",  });

/*
Retrieves an aggregated list of all usable subnetworks in the project. The list contains all of the subnetworks in the project and the subnetworks that were shared by a Shared VPC host project.
*/
await gapi.client.subnetworks.listUsable({ project: "project",  });

/*
Patches the specified subnetwork with the data included in the request. Only certain fields can up updated with a patch request as indicated in the field descriptions. You must specify the current fingerprint of the subnetwork resource being patched.
*/
await gapi.client.subnetworks.patch({ project: "project", region: "region", subnetwork: "subnetwork",  });

/*
Sets the access control policy on the specified resource. Replaces any existing policy.
*/
await gapi.client.subnetworks.setIamPolicy({ project: "project", region: "region", resource: "resource",  });

/*
Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.
*/
await gapi.client.subnetworks.setPrivateIpGoogleAccess({ project: "project", region: "region", subnetwork: "subnetwork",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.subnetworks.testIamPermissions({ project: "project", region: "region", resource: "resource",  });

/*
Retrieves the list of all TargetHttpProxy resources, regional and global, available to the specified project.
*/
await gapi.client.targetHttpProxies.aggregatedList({ project: "project",  });

/*
Deletes the specified TargetHttpProxy resource.
*/
await gapi.client.targetHttpProxies.delete({ project: "project", targetHttpProxy: "targetHttpProxy",  });

/*
Returns the specified TargetHttpProxy resource. Gets a list of available target HTTP proxies by making a list() request.
*/
await gapi.client.targetHttpProxies.get({ project: "project", targetHttpProxy: "targetHttpProxy",  });

/*
Creates a TargetHttpProxy resource in the specified project using the data included in the request.
*/
await gapi.client.targetHttpProxies.insert({ project: "project",  });

/*
Retrieves the list of TargetHttpProxy resources available to the specified project.
*/
await gapi.client.targetHttpProxies.list({ project: "project",  });

/*
Changes the URL map for TargetHttpProxy.
*/
await gapi.client.targetHttpProxies.setUrlMap({ project: "project", targetHttpProxy: "targetHttpProxy",  });

/*
Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.
*/
await gapi.client.targetHttpsProxies.aggregatedList({ project: "project",  });

/*
Deletes the specified TargetHttpsProxy resource.
*/
await gapi.client.targetHttpsProxies.delete({ project: "project", targetHttpsProxy: "targetHttpsProxy",  });

/*
Returns the specified TargetHttpsProxy resource. Gets a list of available target HTTPS proxies by making a list() request.
*/
await gapi.client.targetHttpsProxies.get({ project: "project", targetHttpsProxy: "targetHttpsProxy",  });

/*
Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
*/
await gapi.client.targetHttpsProxies.insert({ project: "project",  });

/*
Retrieves the list of TargetHttpsProxy resources available to the specified project.
*/
await gapi.client.targetHttpsProxies.list({ project: "project",  });

/*
Sets the QUIC override policy for TargetHttpsProxy.
*/
await gapi.client.targetHttpsProxies.setQuicOverride({ project: "project", targetHttpsProxy: "targetHttpsProxy",  });

/*
Replaces SslCertificates for TargetHttpsProxy.
*/
await gapi.client.targetHttpsProxies.setSslCertificates({ project: "project", targetHttpsProxy: "targetHttpsProxy",  });

/*
Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.
*/
await gapi.client.targetHttpsProxies.setSslPolicy({ project: "project", targetHttpsProxy: "targetHttpsProxy",  });

/*
Changes the URL map for TargetHttpsProxy.
*/
await gapi.client.targetHttpsProxies.setUrlMap({ project: "project", targetHttpsProxy: "targetHttpsProxy",  });

/*
Retrieves an aggregated list of target instances.
*/
await gapi.client.targetInstances.aggregatedList({ project: "project",  });

/*
Deletes the specified TargetInstance resource.
*/
await gapi.client.targetInstances.delete({ project: "project", targetInstance: "targetInstance", zone: "zone",  });

/*
Returns the specified TargetInstance resource. Gets a list of available target instances by making a list() request.
*/
await gapi.client.targetInstances.get({ project: "project", targetInstance: "targetInstance", zone: "zone",  });

/*
Creates a TargetInstance resource in the specified project and zone using the data included in the request.
*/
await gapi.client.targetInstances.insert({ project: "project", zone: "zone",  });

/*
Retrieves a list of TargetInstance resources available to the specified project and zone.
*/
await gapi.client.targetInstances.list({ project: "project", zone: "zone",  });

/*
Adds health check URLs to a target pool.
*/
await gapi.client.targetPools.addHealthCheck({ project: "project", region: "region", targetPool: "targetPool",  });

/*
Adds an instance to a target pool.
*/
await gapi.client.targetPools.addInstance({ project: "project", region: "region", targetPool: "targetPool",  });

/*
Retrieves an aggregated list of target pools.
*/
await gapi.client.targetPools.aggregatedList({ project: "project",  });

/*
Deletes the specified target pool.
*/
await gapi.client.targetPools.delete({ project: "project", region: "region", targetPool: "targetPool",  });

/*
Returns the specified target pool. Gets a list of available target pools by making a list() request.
*/
await gapi.client.targetPools.get({ project: "project", region: "region", targetPool: "targetPool",  });

/*
Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
*/
await gapi.client.targetPools.getHealth({ project: "project", region: "region", targetPool: "targetPool",  });

/*
Creates a target pool in the specified project and region using the data included in the request.
*/
await gapi.client.targetPools.insert({ project: "project", region: "region",  });

/*
Retrieves a list of target pools available to the specified project and region.
*/
await gapi.client.targetPools.list({ project: "project", region: "region",  });

/*
Removes health check URL from a target pool.
*/
await gapi.client.targetPools.removeHealthCheck({ project: "project", region: "region", targetPool: "targetPool",  });

/*
Removes instance URL from a target pool.
*/
await gapi.client.targetPools.removeInstance({ project: "project", region: "region", targetPool: "targetPool",  });

/*
Changes a backup target pool's configurations.
*/
await gapi.client.targetPools.setBackup({ project: "project", region: "region", targetPool: "targetPool",  });

/*
Deletes the specified TargetSslProxy resource.
*/
await gapi.client.targetSslProxies.delete({ project: "project", targetSslProxy: "targetSslProxy",  });

/*
Returns the specified TargetSslProxy resource. Gets a list of available target SSL proxies by making a list() request.
*/
await gapi.client.targetSslProxies.get({ project: "project", targetSslProxy: "targetSslProxy",  });

/*
Creates a TargetSslProxy resource in the specified project using the data included in the request.
*/
await gapi.client.targetSslProxies.insert({ project: "project",  });

/*
Retrieves the list of TargetSslProxy resources available to the specified project.
*/
await gapi.client.targetSslProxies.list({ project: "project",  });

/*
Changes the BackendService for TargetSslProxy.
*/
await gapi.client.targetSslProxies.setBackendService({ project: "project", targetSslProxy: "targetSslProxy",  });

/*
Changes the ProxyHeaderType for TargetSslProxy.
*/
await gapi.client.targetSslProxies.setProxyHeader({ project: "project", targetSslProxy: "targetSslProxy",  });

/*
Changes SslCertificates for TargetSslProxy.
*/
await gapi.client.targetSslProxies.setSslCertificates({ project: "project", targetSslProxy: "targetSslProxy",  });

/*
Sets the SSL policy for TargetSslProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the SSL proxy load balancer. They do not affect the connection between the load balancer and the backends.
*/
await gapi.client.targetSslProxies.setSslPolicy({ project: "project", targetSslProxy: "targetSslProxy",  });

/*
Deletes the specified TargetTcpProxy resource.
*/
await gapi.client.targetTcpProxies.delete({ project: "project", targetTcpProxy: "targetTcpProxy",  });

/*
Returns the specified TargetTcpProxy resource. Gets a list of available target TCP proxies by making a list() request.
*/
await gapi.client.targetTcpProxies.get({ project: "project", targetTcpProxy: "targetTcpProxy",  });

/*
Creates a TargetTcpProxy resource in the specified project using the data included in the request.
*/
await gapi.client.targetTcpProxies.insert({ project: "project",  });

/*
Retrieves the list of TargetTcpProxy resources available to the specified project.
*/
await gapi.client.targetTcpProxies.list({ project: "project",  });

/*
Changes the BackendService for TargetTcpProxy.
*/
await gapi.client.targetTcpProxies.setBackendService({ project: "project", targetTcpProxy: "targetTcpProxy",  });

/*
Changes the ProxyHeaderType for TargetTcpProxy.
*/
await gapi.client.targetTcpProxies.setProxyHeader({ project: "project", targetTcpProxy: "targetTcpProxy",  });

/*
Retrieves an aggregated list of target VPN gateways.
*/
await gapi.client.targetVpnGateways.aggregatedList({ project: "project",  });

/*
Deletes the specified target VPN gateway.
*/
await gapi.client.targetVpnGateways.delete({ project: "project", region: "region", targetVpnGateway: "targetVpnGateway",  });

/*
Returns the specified target VPN gateway. Gets a list of available target VPN gateways by making a list() request.
*/
await gapi.client.targetVpnGateways.get({ project: "project", region: "region", targetVpnGateway: "targetVpnGateway",  });

/*
Creates a target VPN gateway in the specified project and region using the data included in the request.
*/
await gapi.client.targetVpnGateways.insert({ project: "project", region: "region",  });

/*
Retrieves a list of target VPN gateways available to the specified project and region.
*/
await gapi.client.targetVpnGateways.list({ project: "project", region: "region",  });

/*
Retrieves the list of all UrlMap resources, regional and global, available to the specified project.
*/
await gapi.client.urlMaps.aggregatedList({ project: "project",  });

/*
Deletes the specified UrlMap resource.
*/
await gapi.client.urlMaps.delete({ project: "project", urlMap: "urlMap",  });

/*
Returns the specified UrlMap resource. Gets a list of available URL maps by making a list() request.
*/
await gapi.client.urlMaps.get({ project: "project", urlMap: "urlMap",  });

/*
Creates a UrlMap resource in the specified project using the data included in the request.
*/
await gapi.client.urlMaps.insert({ project: "project",  });

/*
Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap.
*/
await gapi.client.urlMaps.invalidateCache({ project: "project", urlMap: "urlMap",  });

/*
Retrieves the list of UrlMap resources available to the specified project.
*/
await gapi.client.urlMaps.list({ project: "project",  });

/*
Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
*/
await gapi.client.urlMaps.patch({ project: "project", urlMap: "urlMap",  });

/*
Updates the specified UrlMap resource with the data included in the request.
*/
await gapi.client.urlMaps.update({ project: "project", urlMap: "urlMap",  });

/*
Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.
*/
await gapi.client.urlMaps.validate({ project: "project", urlMap: "urlMap",  });

/*
Retrieves an aggregated list of VPN gateways.
*/
await gapi.client.vpnGateways.aggregatedList({ project: "project",  });

/*
Deletes the specified VPN gateway.
*/
await gapi.client.vpnGateways.delete({ project: "project", region: "region", vpnGateway: "vpnGateway",  });

/*
Returns the specified VPN gateway. Gets a list of available VPN gateways by making a list() request.
*/
await gapi.client.vpnGateways.get({ project: "project", region: "region", vpnGateway: "vpnGateway",  });

/*
Returns the status for the specified VPN gateway.
*/
await gapi.client.vpnGateways.getStatus({ project: "project", region: "region", vpnGateway: "vpnGateway",  });

/*
Creates a VPN gateway in the specified project and region using the data included in the request.
*/
await gapi.client.vpnGateways.insert({ project: "project", region: "region",  });

/*
Retrieves a list of VPN gateways available to the specified project and region.
*/
await gapi.client.vpnGateways.list({ project: "project", region: "region",  });

/*
Sets the labels on a VpnGateway. To learn more about labels, read the Labeling Resources documentation.
*/
await gapi.client.vpnGateways.setLabels({ project: "project", region: "region", resource: "resource",  });

/*
Returns permissions that a caller has on the specified resource.
*/
await gapi.client.vpnGateways.testIamPermissions({ project: "project", region: "region", resource: "resource",  });

/*
Retrieves an aggregated list of VPN tunnels.
*/
await gapi.client.vpnTunnels.aggregatedList({ project: "project",  });

/*
Deletes the specified VpnTunnel resource.
*/
await gapi.client.vpnTunnels.delete({ project: "project", region: "region", vpnTunnel: "vpnTunnel",  });

/*
Returns the specified VpnTunnel resource. Gets a list of available VPN tunnels by making a list() request.
*/
await gapi.client.vpnTunnels.get({ project: "project", region: "region", vpnTunnel: "vpnTunnel",  });

/*
Creates a VpnTunnel resource in the specified project and region using the data included in the request.
*/
await gapi.client.vpnTunnels.insert({ project: "project", region: "region",  });

/*
Retrieves a list of VpnTunnel resources contained in the specified project and region.
*/
await gapi.client.vpnTunnels.list({ project: "project", region: "region",  });

/*
Deletes the specified zone-specific Operations resource.
*/
await gapi.client.zoneOperations.delete({ operation: "operation", project: "project", zone: "zone",  });

/*
Retrieves the specified zone-specific Operations resource.
*/
await gapi.client.zoneOperations.get({ operation: "operation", project: "project", zone: "zone",  });

/*
Retrieves a list of Operation resources contained within the specified zone.
*/
await gapi.client.zoneOperations.list({ project: "project", zone: "zone",  });

/*
Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress.

This method is called on a best-effort basis. Specifically:  
- In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. 
- If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`.
*/
await gapi.client.zoneOperations.wait({ operation: "operation", project: "project", zone: "zone",  });

/*
Returns the specified Zone resource. Gets a list of available zones by making a list() request.
*/
await gapi.client.zones.get({ project: "project", zone: "zone",  });

/*
Retrieves the list of Zone resources available to the specified project.
*/
await gapi.client.zones.list({ project: "project",  });
```