import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBCICC;

// Create API instance
const usersApi = new platformClient.UsersApi();
const body = [
  { "id": "6a4921d3-360d-41f5-aa55-0924719efd13", "acdAutoAnswer": false },
  { "id": "d089116c-ce69-4733-8ce5-5073560d0c6a", "acdAutoAnswer": false },
  { "id": "fa259cba-8361-442a-8aa1-1073d80ac371", "acdAutoAnswer": false },
  { "id": "f15a97c2-8114-4d35-b8c1-a76afa97b0c3", "acdAutoAnswer": false },
  { "id": "11ac6575-7a05-463f-93bd-c4a5cffb2216", "acdAutoAnswer": false },
  { "id": "cfd2b939-cc30-4257-8a20-a206fe4f92cd", "acdAutoAnswer": false }
]

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
