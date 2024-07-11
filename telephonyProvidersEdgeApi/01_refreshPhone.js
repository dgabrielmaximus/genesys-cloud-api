import { platformClient, client, orgOauth } from "../config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBC;

const telephonyApi = new platformClient.TelephonyProvidersEdgeApi();
const usersApi = new platformClient.UsersApi();
const stationsApi = new platformClient.StationsApi();

let userId = "43915853-6810-46e2-9744-55cf87783acf"
let stationId;

let opts = { 
  "webRtcUserId": userId, // String | Filter by webRtcUser.id
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return usersApi.deleteUserStationDefaultstation(userId);
  })
  .then((data) => {
    console.log("deleteUserStationDefaultstation returned successfully.");
    return telephonyApi.getTelephonyProvidersEdgesPhones(opts);
  })
  .then((data) => {
    stationId = data.entities[0].lines[0].id;
    return stationsApi.deleteStationAssociateduser(stationId);
  })
  .then((data) => {
    console.log("deleteStationAssociateduser returned successfully.");
    return usersApi.putUserStationDefaultstationStationId(userId, stationId)
  })
  .then((data) => {
    console.log("putUserStationDefaultstationStationId returned successfully.");
    return usersApi.putUserStationAssociatedstationStationId(userId, stationId)
  })
  .then((data) => {
    console.log("putUserStationAssociatedstationStationId returned successfully.");
    return "Phone has been refreshed."
  })
  .catch((err) => {
    console.log("There was a failure calling deleteUserStationDefaultstation");
    console.error(err);
  });
