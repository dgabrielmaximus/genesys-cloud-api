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

let bodyArr = [
  { name: 'Search | Fee Quote' },
  { name: 'Search | Small Claims Court' },
  { name: 'Search | Certified Product' }
]

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    let idArr = [];
    let promises = bodyArr.map((body) => {
      return routingApi.postRoutingWrapupcodes(body).then((data) => {
        idArr.push({ id: data.id });
      });
    });

    return Promise.all(promises).then(() => {
      console.log(idArr);
      return idArr;
    });
  })
  .catch((err) => {
    console.log("There was a failure authenticating the client.");
    console.error(err);
  });