import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

const groupsApi = new platformClient.GroupsApi();

let bodyArr = [
  {
    id: "3b641416-2bea-4111-a2f2-c9d0d0f49237",
    name: "[Admin] ALL PERMISSIONS",
    state: "active",
    version: 44,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "659bfe2c6b1e141b9558d38e@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "db7b7410-4748-409c-89fa-7c8cd9755cc5",
      "0076f81a-eef4-4a9e-876a-815ed45bfb9f",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  }
];

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    let promises = bodyArr.map((body) => {
      return groupsApi.putGroup(body.id, {body});
    });

    return Promise.all(promises).then(() => {
      console.log("Success! Groups have been modified.");
      console.log(promises);
    });
  })
  .catch((err) => {
    console.log("There was a failure authenticating the client.");
    console.error(err);
  });
