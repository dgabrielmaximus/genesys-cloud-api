import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

const dataArray = [];

// let idObj = {}
let idObj = {
  id: "",
  name: "",
};

const getIds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.includes("Product")) {
      // Enable if needs object with id
      // idObj = { id: arr[i].id };

      // idObj = { id: arr[i].id };

      dataArray.push(arr[i].id);
      // console.log(nestedArr)
      // dataArray.push(idObj);
    }
  }
  console.log(dataArray);
  return dataArray;
};

const getNames = (arr) => {
  arr.map((item) => {
    dataArray.push(item.name);
  });
  console.log(dataArray);
  return dataArray;
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
