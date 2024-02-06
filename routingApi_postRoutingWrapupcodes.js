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

// Authenticate
client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return routingApi.postRoutingWrapupcodes(body);
  })
  // Create a wrap-up code
  .then((data) => {
    console.log(
      `postRoutingWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`
    );
  })
  .catch((err) => {
    console.log("There was a failure calling postRoutingWrapupcodes");
    console.error(err);
  });

/*
{
  "id": "24a11d9e-e7b0-4587-b486-df72383f5266",
  "name": "Sample|Test",
  "division": {
    "id": "*"
  },
  "dateCreated": "2024-02-06T15:19:28.722Z",
  "createdBy": "db7b7410-4748-409c-89fa-7c8cd9755cc5",
  "selfUri": "/api/v2/routing/wrapupcodes/24a11d9e-e7b0-4587-b486-df72383f5266"
}
  */
