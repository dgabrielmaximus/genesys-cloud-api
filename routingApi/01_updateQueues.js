import { platformClient, client, orgOauth } from "../config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

const dataArray = [];

const getData = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].division.id === "b6d361db-13a9-4c98-9373-3729e1d8f1cf") {
        dataArray.push({id: arr[i].id, name: arr[i].name, department: arr[i].department});
      }
  }
  console.log(dataArray)
  console.log(dataArray.length);
  return dataArray;
};

let opts = { 
  "pageNumber": 1, // Number | Page number
  "pageSize": 100, // Number | Page size
  "sortOrder": "asc", // String | Note: results are sorted by name.
  // "name": "name_example", // String | Include only queues with the given name (leading and trailing asterisks allowed)
  // "id": ["id_example"], // [String] | Include only queues with the specified ID(s)
  "divisionId": ["b6d361db-13a9-4c98-9373-3729e1d8f1cf"], // [String] | Include only queues in the specified division ID(s)
  // "peerId": ["peerId_example"], // [String] | Include only queues with the specified peer ID(s)
  // "cannedResponseLibraryId": "cannedResponseLibraryId_example", // String | Include only queues explicitly associated with the specified canned response library ID
  // "hasPeer": true // Boolean | Include only queues with a peer ID
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return routingApi.getRoutingQueues(opts);
  })
  .then((data) => {
    console.log(data.entities)
    // console.log(data.total);
    // getData(data.entities);
    // console.log(getData(data.entities));
    // console.log(getData(data.entities));
    // return getData(data.entities);
  })
  .catch((err) => {
    console.log("There was a failure calling getRoutingQueues");
    console.error(err);
  });