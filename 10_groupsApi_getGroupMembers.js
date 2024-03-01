import { platformClient, client, clientId, clientSecret } from "./config.js";
const groupsApi = new platformClient.GroupsApi();

const groupIds = "b9d269a8-685b-44d5-baba-3bb3eb166d85";

// const findMembers = (arr) => {
//   return arr.map((object) => {
//     return object.division.name.includes("SBC_BCROS_UAT")
//   });
// };

let groupMembersIds = [];

const getGroupMembers = (arr) => {
  arr.map((object) => {
    groupMembersIds.push(object.id);
  });
  return groupMembersIds;
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
    return groupsApi.getGroupMembers(groupIds, opts).then((data) => {
      // console.log(curGrp);
      console.log(getGroupMembers(data.entities));
    });
  })
  .catch((err) => {
    console.log("There was a failure calling getGroupMembers");
    console.error(err);
  });
