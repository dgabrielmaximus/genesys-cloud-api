import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBCICC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

const dataArray = [];

// let idObj = {}
let idObj = {
  id: "",
  name: "",
};

const getIds = (arr) => {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].name.includes("BCSC|")) {
  //     // Enable if needs object with id
  //     // idObj = { id: arr[i].id };

  //     idObj = { id: arr[i].id, name: arr[i].name };

  //     // dataArray.push(arr[i].id);
  //     // console.log(nestedArr)
  //     dataArray.push(idObj);
  //   }
  // }
  arr.map((item) => {
    dataArray.push(item.id);
    // dataArray.push({ id: item.id });
  });
  console.log(dataArray);
  return dataArray;
};

const getNames = (arr) => {
  arr.map((item) => {
    // dataArray.push(item.name);
    console.log(item.name);
  });
  // console.log(dataArray);
  // return dataArray;
};

let queueId = "700ea890-efe1-4eec-a40f-fd88bd459d7b";

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
    console.log("There was a failure calling getRoutingQueueWrapupcodes");
    console.error(err);
  });
