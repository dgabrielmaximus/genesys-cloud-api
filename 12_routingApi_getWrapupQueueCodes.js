import { platformClient, client, clientId, clientSecret } from "./config.js";

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
    dataArray.push({ id: item.id });
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

let queueId = "e8593b94-8ad6-4479-939e-c9ebb1d206f5";

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
