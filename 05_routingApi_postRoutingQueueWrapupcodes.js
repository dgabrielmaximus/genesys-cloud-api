import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.FEC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

let queueId = "b3641ee8-a107-4a32-b26e-8b0957e66990";
let body = [
  { id: '3d1ff2e6-1f03-4311-81d2-b9dc37393c7c' },
  { id: 'f776d290-d5b1-4d13-b710-f0babfdfaf86' },
  { id: '815cb14a-1046-4615-bad6-6422dc95a115' } 
]; // Object | List of wrapup codes

// Create a wrap-up code
client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return routingApi.postRoutingQueueWrapupcodes(queueId, body);
  })
  .then((data) => {
    console.log(
      `postRoutingQueueWrapupcodes success! data: ${JSON.stringify(
        data,
        null,
        2
      )}`
    );
  })
  .catch((err) => {
    console.log("There was a failure calling postRoutingQueueWrapupcodes");
    console.error(err);
  });
