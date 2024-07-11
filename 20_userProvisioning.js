import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.FEC;

const usersApi = new platformClient.UsersApi();
const groupsApi = new platformClient.GroupsApi();
const telephonyApi = new platformClient.TelephonyProvidersEdgeApi();

let userId = "";

let userBody = {
  name: 'Anthony  Pierre', email: 'Anthony.Pierre@elections.ca',
  divisionId: "5d1ef6ed-9d77-4a30-b231-29718d37ea6a",
  state: "active",
};

let groupArr = [
  {
    id: "95fd009d-7012-4278-9ee1-24bccb0d1133",
    memberIds: [],
    version: 0
  },
  {
    id: "1f2c766f-eab9-4def-b0a5-1c2eefb528d3",
    memberIds: [],
    version: 0
  },
];

let phoneBody = {
  name: userBody.name + " WebRTC",
  state: "active",
  site: {
    // "id": "8f7616c1-8053-4350-bbd5-efdee4b8f314", // SBC
    // "id": "0a994642-65cf-4cba-b98e-3e9976048ef3", // SBCICC
  },
  phoneBaseSettings: {
    // "id": "9f4d2909-cd13-49d6-8f9a-997c3450c83d", // SBC
    // "id": "5f9c1e0d-cadb-4792-b982-9a3843ac0b9c", // SBCICC
  },
  lines: [
    {
      lineBaseSettings: {
        // "id": "d1ee926c-dfc3-4a25-a3a0-a5eb3792f77b", // SBC
        // "id": "0a74cebd-093c-4679-97d0-c8a71acfa842", // SBCICC
      },
    },
  ],
  properties: {},
  webRtcUser: {
    id: "",
    name: userBody.name,
  },
};

let stationId = "";

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return usersApi.postUsers(userBody);
  })
  .then((data) => {
    userId = data.id;
    // phoneBody.webRtcUser.id = data.id;
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
  // .then(() => {
  //   return telephonyApi.postTelephonyProvidersEdgesPhones(phoneBody);
  // })
  // .then((data) => {
  //   console.log(data);
  //   stationId = data.lines[0].id;
  //   return usersApi.putUserStationDefaultstationStationId(userId, stationId);
  // })
  .then(() => {
    console.log("User created and added to group");
    // console.log("User created, phone assigned, and added to group");
  })
  .catch((err) => {
    console.log("There was a failure calling userProvisioning");
    console.error(err);
  });
