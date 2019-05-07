/**
 * Auto-generated action file for "DataBoxManagementClient" API.
 *
 * Generated at: 2019-05-07T14:37:55.820Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-databox-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Jobs_Create'
 * Endpoint Path: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "subscriptionId",
    "resourceGroupName",
    "jobName",
    "api-version"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "subscriptionId": "subscriptionId",
    "resourceGroupName": "resourceGroupName",
    "jobName": "jobName",
    "api_version": "api-version",
    "id": "id",
    "name": "name",
    "cancellationReason": "cancellationReason",
    "chainOfCustodySasKey": "chainOfCustodySasKey",
    "contactName": "contactName",
    "emailList": "emailList",
    "mobile": "mobile",
    "notificationPreference": "notificationPreference",
    "phone": "phone",
    "phoneExtension": "phoneExtension",
    "contactDetails": "contactDetails",
    "copyLogDetails": "copyLogDetails",
    "carrierName": "carrierName",
    "trackingId": "trackingId",
    "trackingUrl": "trackingUrl",
    "deliveryPackage": "deliveryPackage",
    "destinationAccountDetails": "destinationAccountDetails",
    "errorDetails": "errorDetails",
    "expectedDataSizeInTeraBytes": "expectedDataSizeInTeraBytes",
    "jobDetailsType": "jobDetailsType",
    "jobStages": "jobStages",
    "preferredDataCenterRegion": "preferredDataCenterRegion",
    "preferences": "preferences",
    "returnPackage": "returnPackage",
    "reverseShipmentLabelSasKey": "reverseShipmentLabelSasKey",
    "addressType": "addressType",
    "city": "city",
    "companyName": "companyName",
    "country": "country",
    "postalCode": "postalCode",
    "stateOrProvince": "stateOrProvince",
    "streetAddress1": "streetAddress1",
    "streetAddress2": "streetAddress2",
    "streetAddress3": "streetAddress3",
    "zipExtendedCode": "zipExtendedCode",
    "shippingAddress": "shippingAddress",
    "details": "details",
    "code": "code",
    "message": "message",
    "error": "error",
    "isCancellable": "isCancellable",
    "isDeletable": "isDeletable",
    "isShippingAddressEditable": "isShippingAddressEditable",
    "startTime": "startTime",
    "status": "status",
    "properties": "properties",
    "type": "type",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['azure_auth'] = {token: cfg['azure_auth']};

    let callParams = {
        spec: spec,
        operationId: 'Jobs_Create',
        pathName: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}