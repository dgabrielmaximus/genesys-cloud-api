import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, ICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

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
    idObj = { id: arr[i].id, name: arr[i].name };
    dataArray.push(idObj);
  }
  console.log(dataArray);
  return dataArray;
};

let queueId = "a61b7a58-cdac-4421-9508-bc6e4f82584f";
let opts = {
  pageSize: 500, // Number | Page size
  pageNumber: 1, // Number | Page number
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return routingApi.getRoutingQueueWrapupcodes(queueId, opts);
  })
  .then((data) => {
    getIds(data.entities);
  })
  .catch((err) => {
    console.log("There was a failure calling patchUsersBulk");
    console.error(err);
  });
