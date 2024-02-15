import { platformClient, client, clientId, clientSecret } from "./config.js";
const groupsApi = new platformClient.GroupsApi();

// const idsArray = [];

// const getIds = (arr) => {
//   let x;
//   for (let i = 0; i < arr.length; i++) {
//     //   if (arr[i].acdAutoAnswer === false) {
//     //     idsArray.push(arr[i].id);
//     //   }
//     arr[i].groups.find((elem) => {
//       // console.log(elem.id === "2e21d087-5ebc-4fca-b92b-37e5ff50b51a");
//       if (
//         elem.id === "2e21d087-5ebc-4fca-b92b-37e5ff50b51a" ||
//         elem.id === "1bbcdac1-3b81-4550-a596-7a99c3cddc34" ||
//         elem.id === "513d2755-57d7-4cc8-bfe8-8e05f5827be3" ||
//         elem.id === "4e02f11c-9c28-4352-9a53-78a45c8c50b1" ||
//         elem.id === "196695ed-e0c0-43a9-801a-53af6de54a9f" ||
//         elem.id === "d34cebf0-f701-4f07-8877-3e7b1780d2cf" ||
//         elem.id === "2f00d079-86cd-4b91-9201-6aaba3eacddd" ||
//         elem.id === "5e8eb868-f6e3-460c-8f1d-ed98b6fe61c1" ||
//         elem.id === "97504fa7-bf5e-42c1-8462-14ffc6ac593e" ||
//         elem.id === "154c8f0d-3698-4250-b5f4-0ba00d19683a" ||
//         elem.id === "34976cca-fd91-4428-90c4-8ba0e1291db9"
//       ) {
//         idsArray.push(arr[i].id);
//       }
//     });
//     // console.log(x);
//   }
//   console.log(idsArray);
//   return idsArray;
// };

let opts = { 
  "pageSize": 100, // Number | Page size
  "pageNumber": 1, // Number | Page number
  // "id": ["id_example"], // [String] | id
  // "jabberId": ["jabberId_example"], // [String] | A list of jabberIds to fetch by bulk (cannot be used with the id parameter)
  "sortOrder": "ASC" // String | Ascending or descending sort order
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return groupsApi.getGroups(opts);
  })
  .then((data) => {
    console.log(data.entities);
    return data.entities
  })
  .catch((err) => {
    console.log("There was a failure calling patchUsersBulk");
    console.error(err);
  });
