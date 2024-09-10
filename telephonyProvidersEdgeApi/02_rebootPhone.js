import { platformClient, client, orgOauth } from "../config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.DEV;

const telephonyApi = new platformClient.TelephonyProvidersEdgeApi();

let userId = "72867fe3-c269-4da6-914e-e0f2ea740c47"

let opts = { 
  "webRtcUserId": userId, // String | Filter by webRtcUser.id
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return telephonyApi.getTelephonyProvidersEdgesPhones(opts);
  })
  .then((data) => {
    let phoneId = data.entities[0].id;
    console.log("getTelephonyProvidersEdgesPhones returned successfully.");
    return telephonyApi.postTelephonyProvidersEdgesPhoneReboot(phoneId);
  })
  .then((data) => {
    console.log(data);
    console.log("postTelephonyProvidersEdgesPhoneReboot returned successfully.");
    return "Phone has been rebooted."
  })
  .catch((err) => {
    console.log("There was a failure calling getTelephonyProvidersEdgesPhones");
    console.error(err);
  });
