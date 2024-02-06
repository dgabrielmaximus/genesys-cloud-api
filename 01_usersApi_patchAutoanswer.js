const dotenv = require("dotenv");
dotenv.config();
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const region = process.env.REGION; //https://developer.genesys.cloud/platform/api/

const platformClient = require("purecloud-platform-client-v2");
const client = platformClient.ApiClient.instance;
client.setEnvironment(region);

// Create API instance
const usersApi = new platformClient.UsersApi();
const body = require("./00_body");

// Update bulk acd autoanswer on users. Max 50 users can be updated at a time.
client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return usersApi.patchUsersBulk(body);
  })
  .then((data) => {
    console.log(
      `patchUsersBulk success! data: ${JSON.stringify(data, null, 2)}`,
    );
  })
  .catch((err) => {
    console.log("There was a failure calling patchUsersBulk");
    console.error(err);
  });
