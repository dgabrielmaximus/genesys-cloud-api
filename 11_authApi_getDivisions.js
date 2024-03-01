import { platformClient, client, clientId, clientSecret } from "./config.js";
const objectsApi = new platformClient.ObjectsApi();

// const getIds = (arr) => {
//   arr.map((object) => {
//     if (object.name.includes("Gen - ")) {
//       groupIds.push({ id: object.id, name: object.name });
//     }
//   });
//   return groupIds;
// };

let opts = { 
  "pageSize": 100, // Number | The total page size requested
  "pageNumber": 1, // Number | The page number requested
  // "sortBy": "sortBy_example", // String | variable name requested to sort by
  // "expand": ["expand_example"], // [String] | variable name requested by expand list
  // "nextPage": "nextPage_example", // String | next page token
  // "previousPage": "previousPage_example", // String | Previous page token
  // "objectCount": false, // Boolean | Include the count of objects contained in the division
  // "id": ["id_example"], // [String] | Optionally request specific divisions by their IDs
  // "name": "name_example" // String | Search term to filter by division name
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return objectsApi.getAuthorizationDivisions(opts);
  })
  .then((data) => {
    // console.log(getIds(data.entities));
    console.log(data.entities);
    return data.entities;
  })
  .catch((err) => {
    console.log("There was a failure calling getGroups");
    console.error(err);
  });
