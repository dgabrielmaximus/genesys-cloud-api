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

let body = {}; // Object | WrapupCode

// Create a wrap-up code
routingApi.postRoutingWrapupcodes(body)
  .then((data) => {
    console.log(`postRoutingWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log("There was a failure calling postRoutingWrapupcodes");
    console.error(err);
  });