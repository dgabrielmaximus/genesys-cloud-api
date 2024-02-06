const dotenv = require("dotenv");
dotenv.config();
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const region = process.env.REGION; //https://developer.genesys.cloud/platform/api/

const platformClient = require("purecloud-platform-client-v2");
const client = platformClient.ApiClient.instance;
client.setEnvironment(region);

// Create API instance
const routingApi = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let body = [{}]; // Object | List of wrapup codes

// Create a wrap-up code
routingApi.postRoutingQueueWrapupcodes(queueId, body)
.then((data) => {
  console.log(`postRoutingQueueWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
})
.catch((err) => {
  console.log("There was a failure calling postRoutingQueueWrapupcodes");
  console.error(err);
});