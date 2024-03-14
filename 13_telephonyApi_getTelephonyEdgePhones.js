import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBCICC;

const telephonyApi = new platformClient.TelephonyProvidersEdgeApi();

const dataArray = [];

const getIds = (arr) => {
  arr.map((object) => {
    dataArray.push({ id: object.id, name: object.name, lines: {id: object.lines[0].id, name: object.lines[0].name}, webRtcUser: object.webRtcUser });
  });
  return dataArray;
};

let opts = {
  pageNumber: 1, // Number | Page number
  pageSize: 100, // Number | Page size
  // "sortBy": "name", // String | The field to sort by
  // "sortOrder": "ASC", // String | Sort order
  siteId: "42c61149-6210-4a19-a7af-15fedbced0c3", // String | Filter by site.id
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
  "expand": ["lines"], // [String] | Fields to expand in the response, comma-separated
  "fields": ["webRtcUser"] // [String] | Fields and properties to get, comma-separated
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return telephonyApi.getTelephonyProvidersEdgesPhones(opts);
  })
  .then((data) => {
    // console.log(data.entities[0])
    console.log(getIds(data.entities));
    return getIds(data.entities)
  })
  .catch((err) => {
    console.log("There was a failure calling getGroups");
    console.error(err);
  });