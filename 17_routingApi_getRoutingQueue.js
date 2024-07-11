import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

let queueId = "fa0da72b-846e-42f3-8f16-c1fb3851539a";

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return routingApi.getRoutingQueue(queueId);
  })
  .then((data) => {
    console.log({ id: data.id, name: data.name, defaultScripts: {CALL: {id: "25036990-b083-4edc-bf08-2e81ecaed1a8"}}, "memberGroups": [
      {
        "id": "bf10be55-e5d4-4aa9-9ebe-51215d3d7a45",
        "type": "GROUP"
      }
    ]});
  })
  .catch((err) => {
    console.log("There was a failure calling getRoutingQueue");
    console.error(err);
  });
