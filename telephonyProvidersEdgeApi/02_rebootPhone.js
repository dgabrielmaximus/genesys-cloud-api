import { platformClient, client, orgOauth } from "../config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBC;

const telephonyApi = new platformClient.TelephonyProvidersEdgeApi();

let webRtcUserId = "43915853-6810-46e2-9744-55cf87783acf"

let opts = { 
  "pageNumber": 1, // Number | Page number
  "pageSize": 25, // Number | Page size
  "sortBy": "name", // String | The field to sort by
  "sortOrder": "ASC", // String | Sort order
  "webRtcUserId": webRtcUserId, // String | Filter by webRtcUser.id
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return telephonyApi.getTelephonyProvidersEdgesPhones(opts);
  })
  .then((data) => {
    let phoneId = data.entities[0].id;
    return telephonyApi.postTelephonyProvidersEdgesPhoneReboot(phoneId);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("There was a failure calling getTelephonyProvidersEdgesPhones");
    console.error(err);
  });
