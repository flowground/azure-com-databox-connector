# ![LOGO](logo.png) DataBoxManagementClient **flow**ground Connector

## Description

A generated **flow**ground connector for the DataBoxManagementClient API (version 2018-01-01).

Generated from: https://api.apis.guru/v2/specs/azure.com/databox/2018-01-01/swagger.json<br/>
Generated at: 2019-05-07T17:37:55+03:00

## API Description



## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### This method gets all the operations.

*Tags:* `Operations`

#### Input Parameters
* `api-version` - _required_ - The API Version

### Lists all the jobs available under the subscription.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The Subscription Id
* `api-version` - _required_ - The API Version
* `$skipToken` - _optional_ - $skipToken is supported on Get list of jobs, which provides the next page in the list of jobs.

### This method provides the list of available skus for the given subscription and location.

*Tags:* `Service`

#### Input Parameters
* `subscriptionId` - _required_ - The Subscription Id
* `location` - _required_ - The location of the resource
* `api-version` - _required_ - The API Version

### This method validates the customer shipping address and provide alternate addresses if any.

*Tags:* `Service`

#### Input Parameters
* `subscriptionId` - _required_ - The Subscription Id
* `location` - _required_ - The location of the resource
* `api-version` - _required_ - The API Version

### Lists all the jobs available under the given resource group.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The Subscription Id
* `resourceGroupName` - _required_ - The Resource Group Name
* `api-version` - _required_ - The API Version
* `$skipToken` - _optional_ - $skipToken is supported on Get list of jobs, which provides the next page in the list of jobs.

### Deletes a job.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The Subscription Id
* `resourceGroupName` - _required_ - The Resource Group Name
* `jobName` - _required_ - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
* `api-version` - _required_ - The API Version

### Gets information about the specified job.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The Subscription Id
* `resourceGroupName` - _required_ - The Resource Group Name
* `jobName` - _required_ - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
* `api-version` - _required_ - The API Version
* `$expand` - _optional_ - $expand is supported on details parameter for job, which provides details on the job stages.

### Updates the properties of an existing job.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The Subscription Id
* `resourceGroupName` - _required_ - The Resource Group Name
* `jobName` - _required_ - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
* `api-version` - _required_ - The API Version
* `If-Match` - _optional_ - Defines the If-Match condition. The patch will be performed only if the ETag of the job on the server matches this value.

### Creates a new job with the specified parameters. Existing job cannot be updated with this API and should instead be updated with the Update job API.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The Subscription Id
* `resourceGroupName` - _required_ - The Resource Group Name
* `jobName` - _required_ - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
* `api-version` - _required_ - The API Version

### Book shipment pick up.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The Subscription Id
* `resourceGroupName` - _required_ - The Resource Group Name
* `jobName` - _required_ - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
* `api-version` - _required_ - The API Version

### CancelJob.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The Subscription Id
* `resourceGroupName` - _required_ - The Resource Group Name
* `jobName` - _required_ - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
* `api-version` - _required_ - The API Version

### This method gets the unencrypted secrets related to the job.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The Subscription Id
* `resourceGroupName` - _required_ - The Resource Group Name
* `jobName` - _required_ - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
* `api-version` - _required_ - The API Version

## License

**flow**ground :- Telekom iPaaS / azure-com-databox-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
