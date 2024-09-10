import { platformClient, client, orgOauth } from "../config.js";

// Choose the organization: DEV, SBC, ICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBC;

const telephonyApi = new platformClient.TelephonyProvidersEdgeApi();

const webRtcDataArray = (arr) => {
  let body = [];
  arr.forEach((phone) => !phone.webRtcUser ? body.push(phone.id) : null);
  return body;
};

let opts = {
  pageNumber: 6, // Number | Page number
  pageSize: 500, // Number | Page size
  sortBy: "name", // String | The field to sort by
  sortOrder: "ASC", // String | Sort order
  // "siteId": "siteId_example", // String | Filter by site.id
  // "webRtcUserId": "webRtcUserId_example", // String | Filter by webRtcUser.id
  // "phoneBaseSettingsId": "phoneBaseSettingsId_example", // String | Filter by phoneBaseSettings.id
  // "linesLoggedInUserId": "linesLoggedInUserId_example", // String | Filter by lines.loggedInUser.id
  // "linesDefaultForUserId": "linesDefaultForUserId_example", // String | Filter by lines.defaultForUser.id
  // "phoneHardwareId": "phoneHardwareId_example", // String | Filter by phone_hardwareId
  // "linesId": "linesId_example", // String | Filter by lines.id
  // "linesName": "linesName_example", // String | Filter by lines.name
  // "name": "name_example", // String | Name of the Phone to filter by, comma-separated
  // "statusOperationalStatus": "statusOperationalStatus_example", // String | The primary status to filter by
  // "secondaryStatusOperationalStatus": "secondaryStatusOperationalStatus_example", // String | The secondary status to filter by
  // expand: ["lines"], // [String] | Fields to expand in the response, comma-separated
  fields: ["webRtcUser"], // [String] | Fields and properties to get, comma-separated
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return telephonyApi.getTelephonyProvidersEdgesPhones(opts);
  })
  .then((data) => {
    console.log("getTelephonyProvidersEdgesPhones returned successfully.");
    return webRtcDataArray(data.entities);
  })
  .then((phoneData) => {
    let promises = phoneData.map((phoneId) => {
      console.log(phoneId);
      return telephonyApi.deleteTelephonyProvidersEdgesPhone(phoneId);
    });

    return Promise.all(promises).then(() => {
      console.log("Success! Phones have been deleted.");
      // console.log(promises);
    });
  })
  .catch((err) => {
    console.log("There was a failure calling getTelephonyProvidersEdgesPhones");
    console.error(err);
  });
