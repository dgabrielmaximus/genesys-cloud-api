import { platformClient, client, clientId, clientSecret } from "./config.js";

// Create API instance
const usersApi = new platformClient.UsersApi();

const idsArray = [];

const getIds = (arr) => {
  let x;
  for (let i = 0; i < arr.length; i++) {
    idsArray.push(arr[i].name);
    //   if (arr[i].acdAutoAnswer === false) {
    //     idsArray.push(arr[i].id);
    //   }
    // arr[i].groups.find((elem) => {
    //   // console.log(elem.id === "2e21d087-5ebc-4fca-b92b-37e5ff50b51a");
    //   if (
    //     elem.id === "2e21d087-5ebc-4fca-b92b-37e5ff50b51a" ||
    //     elem.id === "1bbcdac1-3b81-4550-a596-7a99c3cddc34" ||
    //     elem.id === "513d2755-57d7-4cc8-bfe8-8e05f5827be3" ||
    //     elem.id === "4e02f11c-9c28-4352-9a53-78a45c8c50b1" ||
    //     elem.id === "196695ed-e0c0-43a9-801a-53af6de54a9f" ||
    //     elem.id === "d34cebf0-f701-4f07-8877-3e7b1780d2cf" ||
    //     elem.id === "2f00d079-86cd-4b91-9201-6aaba3eacddd" ||
    //     elem.id === "5e8eb868-f6e3-460c-8f1d-ed98b6fe61c1" ||
    //     elem.id === "97504fa7-bf5e-42c1-8462-14ffc6ac593e" ||
    //     elem.id === "154c8f0d-3698-4250-b5f4-0ba00d19683a" ||
    //     elem.id === "34976cca-fd91-4428-90c4-8ba0e1291db9"
    //   ) {
    //     idsArray.push(arr[i].id);
    //   }
    // });
    // console.log(x);
  }
  return idsArray;
};

let opts = {
  pageSize: 50, // Number | Page size
  pageNumber: 1, // Number | Page number
  // "id": ["id_example"], // [String] | A list of user IDs to fetch by bulk
  // "jabberId": ["jabberId_example"], // [String] | A list of jabberIds to fetch by bulk (cannot be used with the id parameter)
  sortOrder: "ASC", // String | Ascending or descending sort order
  expand: ["skills", "profileSkills"], // [String] | Which fields, if any, to expand
  // "integrationPresenceSource": "integrationPresenceSource_example", // String | Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand. When using this parameter the maximum number of users that can be returned is 100.
  state: "active", // String | Only list users of this state
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return usersApi.getUsers(opts);
  })
  .then((data) => {
    // console.log(data);
    // getIds(data.entities);
    console.log(getIds(data.entities));
    return getIds(data.entities);

    // data.entities.map((object) => {
    //   if (object.skills.length > 0) {
    //     // object.skills.map((skill) => {
    //     //   console.log({ name: object.name, skill: skill.name });
    //     // });
    //     console.log({ name: object.name, skills: object.skills.map((skill) => skill.name)});
    //   } else {
    //     console.log({ name: object.name, skills: "No Skills" });
    //   }
    // });
  })
  .catch((err) => {
    console.log("There was a failure calling patchUsersBulk");
    console.error(err);
  });
