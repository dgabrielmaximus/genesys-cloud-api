const dotenv = require("dotenv");
dotenv.config();
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const region = process.env.REGION; //https://developer.genesys.cloud/platform/api/

const platformClient = require("purecloud-platform-client-v2");
const client = platformClient.ApiClient.instance;
client.setEnvironment(region);

// Create API instance
const routingApi = new platformClient.RoutingApi();

const idsArray = [];

// let idObj = {}
let idObj = {
  id: "",
  name: "",
};

const getIds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.includes("BCSC|")) {
      // Enable if needs object with id
      // idObj = { id: arr[i].id };

      idObj = { id: arr[i].id, name: arr[i].name };

      // idsArray.push(arr[i].id);
      // console.log(nestedArr)
      idsArray.push(idObj);
    }
  }
  console.log(idsArray);
  return idsArray;
};

let opts = {
  pageSize: 500, // Number | Page size
  pageNumber: 1, // Number | Page number
  // "sortBy": "name", // String | Sort by
  // "sortOrder": "ascending", // String | Sort order
  // "name": "name_example", // String | Wrapup code's name ('Sort by' param is ignored unless this field is provided)
  // "id": ["id_example"], // [String] | Filter by wrapup code ID(s)
  // "divisionId": ["divisionId_example"] // [String] | Filter by division ID(s)
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return routingApi.getRoutingWrapupcodes(opts);
  })
  .then((data) => {
    getIds(data.entities);
  })
  .catch((err) => {
    console.log("There was a failure calling patchUsersBulk");
    console.error(err);
  });
