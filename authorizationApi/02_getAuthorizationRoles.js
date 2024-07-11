import { platformClient, client, orgOauth } from "../config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBCICC;

const authorizationApi = new platformClient.AuthorizationApi();

let opts = { 
  "pageSize": 100, // Number | The total page size requested
  "pageNumber": 1, // Number | The page number requested
  // "sortBy": "sortBy_example", // String | variable name requested to sort by
  // "expand": ["expand_example"], // [String] | variable name requested by expand list
  // "nextPage": "nextPage_example", // String | next page token
  // "previousPage": "previousPage_example", // String | Previous page token
  // "name": "name_example", // String | 
  // "permission": ["permission_example"], // [String] | 
  // "defaultRoleId": ["defaultRoleId_example"], // [String] | 
  // "userCount": true, // Boolean | 
  // "id": ["id_example"] // [String] | id
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return authorizationApi.getAuthorizationRoles(opts);
  })
  .then((data) => {
    console.log(data.entities);
    return data.entities;
  })
  .catch((err) => {
    console.log("There was a failure calling getAuthorizationRoles");
    console.error(err);
  });
