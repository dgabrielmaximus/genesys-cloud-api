import { platformClient, client, orgOauth } from "../../config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

const routingApi = new platformClient.RoutingApi();

const dataArray = [];
const getIds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    dataArray.push(arr[i]);
  }
  // console.log(dataArray);
  return dataArray;
};

let opts = {
  pageNumber: 1, // Number | Page number
  pageSize: 100, // Number | Page size
  sortOrder: "asc", // String | Note: results are sorted by name.
  name: "*BCROS*", // String | Include only queues with the given name (leading and trailing asterisks allowed)
  // "id": ["id_example"], // [String] | Include only queues with the specified ID(s)
  divisionId: [ division.UAT, division.TRN ], // [String] | Include only queues in the specified division ID(s)
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
    // console.log(data.entities)
    return getIds(data.entities);
  })
  .then((queueData) => {
    // console.log(queueData);
    let promises = queueData.map((body) => {
      let newBody = {
        ...body,
        name: body.name.replace("BCROS", "BCRDS"),
      };
      // console.log(newBody.name)
      return routingApi.putRoutingQueue(body.id, newBody);
    });

    return Promise.all(promises).then(() => {
      console.log("Success! Queues have been modified.");
      // console.log(promises);
    });
  })
  .catch((err) => {
    console.log("There was a failure calling getRoutingQueues");
    console.error(err);
  });
