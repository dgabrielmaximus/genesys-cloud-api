import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBCICC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

const dataArray = [];

// let idObj = {}
let idObj = {
  // id: "",
  // name: "",
};

const getIds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // if (arr[i].name.includes("Product")) {
    // Enable if needs object with id
    // idObj = { id: arr[i].id, division: { id: arr[i].divisionId } };

    idObj = { id: arr[i].id };
    // dataArray.push(arr[i].name);
    dataArray.push(idObj);
    // dataArray.push(arr[i].id);
    // console.log(nestedArr)
    // dataArray.push(idObj);
    // }
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
  "sortBy": "name", // String | Sort by
  // "sortOrder": "ascending", // String | Sort order
  "name": "BCeID | *", // String | Wrapup code's name ('Sort by' param is ignored unless this field is provided)
  // "id": ["id_example"], // [String] | Filter by wrapup code ID(s)
  divisionId: ["80820210-8dce-491b-9c11-a2f3118e3fe2"], // [String] | Filter by division ID(s)
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return routingApi.getRoutingWrapupcodes(opts);
  })
  .then((data) => {
    // console.log(data.entities);
    getIds(data.entities);
  })
  .catch((err) => {
    console.log("There was a failure calling patchUsersBulk");
    console.error(err);
  });
