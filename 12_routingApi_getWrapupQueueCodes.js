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
    // dataArray.push(item.name);
    dataArray.push({ 
      id: item.id, 
      name: item.name, 
      division: { id: "80820210-8dce-491b-9c11-a2f3118e3fe2" } 
    });
  });
  console.log(dataArray);
  return dataArray;
};

const getNames = (arr) => {
  arr.map((item) => {
    // dataArray.push(item.name);
    // console.log(item.name);
  });
  // console.log(dataArray);
  // return dataArray;
};

let queueId = "e3878ef7-beee-4682-a7b9-6495babb6102";

let opts = {
  pageSize: 500, // Number | Page size
  pageNumber: 1, // Number | Page number
  // divisionId: ["b6d361db-13a9-4c98-9373-3729e1d8f1cf"]
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return routingApi.getRoutingQueueWrapupcodes(queueId, opts);
  })
  .then((data) => {
    // console.log(data.entities);
    getIds(data.entities);
  })
  .catch((err) => {
    console.log("There was a failure calling getRoutingQueueWrapupcodes");
    console.error(err);
  });
