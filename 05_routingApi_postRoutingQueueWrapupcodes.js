import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

let queueId = "2a7590a8-1749-43dd-b9ef-a3791d081820";
let body = [
  { id: 'df8a72ad-2068-4945-a31a-cdc17fb847bf' },
  { id: 'b7ea867b-bb1b-4ba7-917f-5d7e09705c31' },
  { id: 'e86084de-6e4c-4b95-be5b-907b60ea926e' },
  { id: '0b3b4426-629f-4d62-8df3-a6d4b05f2a38' },
  { id: '51fdd2de-b6e2-4185-831a-3164bcf1e18f' },
  { id: '5bc6737c-cbf2-4562-8d53-a4e62e084112' },
  { id: '4b629111-959e-411a-af0d-9a21cdf2853e' },
  { id: '2dc04225-bdbb-4127-b0f8-f1b1106b1791' } 
]

; // Object | List of wrapup codes

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
