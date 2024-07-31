import { platformClient, client, orgOauth } from "../config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

// Create API instance
const usersApi = new platformClient.UsersApi();

const idsArray = [];

const getIds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].division.id === "6a9d15ae-96d9-4cc0-8379-a97b7b1c479b") {
        idsArray.push({id: arr[i].id, name: arr[i].name, department: arr[i].department});
      }
  }
  console.log(idsArray)
  console.log(idsArray.length);
  return idsArray;
};

let opts = {
  pageSize: 500, // Number | Page size
  pageNumber: 1, // Number | Page number
  // "id": ["id_example"], // [String] | A list of user IDs to fetch by bulk
  // "jabberId": ["jabberId_example"], // [String] | A list of jabberIds to fetch by bulk (cannot be used with the id parameter)
  sortOrder: "ASC", // String | Ascending or descending sort order
  // expand: ["skills", "profileSkills"], // [String] | Which fields, if any, to expand
  // "integrationPresenceSource": "integrationPresenceSource_example", // String | Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand. When using this parameter the maximum number of users that can be returned is 100.
  // state: "active", // String | Only list users of this state
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return usersApi.getUsers(opts);
  })
  .then((data) => {
    // console.log(data.total);
    // getIds(data.entities);
    // console.log(getIds(data.entities));
    // console.log(getIds(data.entities));
    return getIds(data.entities);
  })
  .catch((err) => {
    console.log("There was a failure calling getUsers");
    console.error(err);
  });