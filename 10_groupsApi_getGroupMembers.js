import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBCICC;

const groupsApi = new platformClient.GroupsApi();

const groupIds = [
  { id: '181f1191-334a-427f-8147-8c5cc8c3da0e', name: 'TRN_GROUP_1' },
  { id: '837a66c3-9e41-48bd-b073-fd365f9d4920', name: 'TRN_GROUP_2' },
  { id: '85802471-4fbe-4d52-bc80-14b68c2d7e74', name: 'TRN_GROUP_3' },
  { id: 'ca0eceb0-91d0-487c-b9f6-fa1fdb416233', name: 'TRN_GROUP_4' },
  { id: 'ef1dad30-7639-4f67-9613-1815906e8570', name: 'TRN_GROUP_5' },
  { id: '92c4dbbb-e3ae-4605-9cff-699dd60d2590', name: 'TRN_GROUP_6' },
  { id: 'c63466a9-3186-4dcc-8bd8-09bf337b54f5', name: 'TRN_GROUP_7' },
  { id: '16007743-40b6-4683-a209-febb8c94cf06', name: 'TRN_GROUP_8' },
  { id: 'fca011e7-a662-4190-ae47-9cd22e149f9d', name: 'TRN_GROUP_9' }
]

// const findMembers = (arr) => {
//   return arr.map((object) => {
//     return object.division.name.includes("SBC_BCROS_UAT")
//   });
// };

let groupMembersInfo = {};

const getGroupMembers = (arr) => {
  return arr.map((object) => {
    // console.log(object.id);
    groupMembersInfo = {
      name: object.name,
      id: object.id,
      division: object.division.name
    }
    return groupMembersInfo;
    // groupMembersInfo.push(object.id);
    // groupMembersInfo.push({ id: object.id });
  });
  // return groupMembersInfo;
};

let opts = {
  pageSize: 150, // Number | Page size
  pageNumber: 1, // Number | Page number
  // "id": ["id_example"], // [String] | id
  // "jabberId": ["jabberId_example"], // [String] | A list of jabberIds to fetch by bulk (cannot be used with the id parameter)
  sortOrder: "ASC", // String | Ascending or descending sort order
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    // let curGrp = groupIds[1];
    // return groupsApi.getGroupMembers(groupIds, opts).then((data) => {
    //   // console.log(curGrp);
    //   console.log(getGroupMembers(data.entities));
    // });
    let info = [];

    let promises = groupIds.map((group) => {
      return groupsApi.getGroupMembers(group.id, opts).then((data) => {
        info.push({ id: group.id, name: group.name, members: getGroupMembers(data.entities) });
      });
    });

    return Promise.all(promises).then(() => {
      // console.log(info);
      // return info
      info.map((group) => {
        console.log(group);
      });
    });
  })
  .catch((err) => {
    console.log("There was a failure calling getGroupMembers");
    console.error(err);
  });
