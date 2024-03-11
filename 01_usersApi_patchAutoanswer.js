import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBCICC;

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
