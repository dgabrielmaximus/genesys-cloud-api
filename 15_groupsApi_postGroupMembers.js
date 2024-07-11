import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.FEC;

const groupsApi = new platformClient.GroupsApi();

let userId = "cfd2b939-cc30-4257-8a20-a206fe4f92cd";

let groupArr = [
  {
    id: "e726cf97-498b-43a1-a881-1771cd5c6a0f",
    memberIds: [],
    version: 0
  },
  {
    id: "a69b7ce7-02c7-460d-935c-59e0d09f5803",
    memberIds: [],
    version: 0
  },
  {
    id: "c87dee59-5f95-4f0e-aad8-6154dabe3a71",
    memberIds: [],
    version: 0
  },
  {
    id: "61691c4a-49cd-4017-a3bf-76d1a598a3f5",
    memberIds: [],
    version: 0
  },
  {
    id: "733c7042-52d0-42a0-9e95-b0c05b1f5f71",
    memberIds: [],
    version: 0
  },
  {
    id: "ae63e20e-2b43-42f2-87e2-4d780b258938",
    memberIds: [],
    version: 0
  },
];

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    let promises = groupArr.map((group) => {
      return groupsApi.getGroup(group.id).then((data) => {
        group.memberIds.push(userId);
        group.version = data.version;
      });
    });

    return Promise.all(promises).then(() => {
      console.log("Success! Group versions have been updated.")
    });
  })
  .then(() => {
    let promises = groupArr.map((group) => {
      return groupsApi.postGroupMembers(group.id, group)
    });

    return Promise.all(promises).then(() => {
      console.log("Success! User has been added to the group")
    });
  })
  .catch((err) => {
    console.log("There was a failure calling userProvisioning");
    console.error(err);
  });
