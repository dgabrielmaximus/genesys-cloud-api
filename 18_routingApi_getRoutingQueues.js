import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, ICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

const dataArray = [];
const getIds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // if (arr[i].name.includes("VAX") || arr[i].name.includes("COVID") || arr[i].name.includes("MACS")) {
      // Enable if needs object with id
      // idObj = { id: arr[i].id };

      // idObj = { id: arr[i].id, name: arr[i].name };

      dataArray.push(arr[i].name);
      // console.log(nestedArr)
      // console.log(JSON.stringify({ 
      //   id: arr[i].id, 
      //   name: arr[i].name,
      //   division: arr[i].division,
      //   description: arr[i].description,
      //   mediaSettings: arr[i].mediaSettings,
      //   routingRules: arr[i].routingRules,
      //   conditionalGroupRouting: arr[i].conditionalGroupRouting,
      //   bullseye: arr[i].bullseye,
      //   scoringMethod: arr[i].scoringMethod,
      //   acwSettings: arr[i].acwSettings,
      //   skillEvaluationMethod: arr[i].skillEvaluationMethod,
      //   memberGroups: arr[i].memberGroups,
      //   queueFlow: arr[i].queueFlow,
      //   emailInQueueFlow: arr[i].emailInQueueFlow,
      //   messageInQueueFlow: arr[i].messageInQueueFlow,
      //   whisperPrompt: arr[i].whisperPrompt,
      //   onHoldPrompt: arr[i].onHoldPrompt,
      //   autoAnswerOnly: arr[i].autoAnswerOnly,
      //   enableTranscription: arr[i].enableTranscription,
      //   enableAudioMonitoring: arr[i].enableAudioMonitoring,
      //   enableManualAssignment: arr[i].enableManualAssignment,
      //   agentOwnedRouting: arr[i].agentOwnedRouting,
      //   directRouting: arr[i].directRouting,
      //   callingPartyName: arr[i].callingPartyName,
      //   callingPartyNumber: arr[i].callingPartyNumber,
      //   defaultScripts: { CALL: { id: "25036990-b083-4edc-bf08-2e81ecaed1a8" } },
      //   outboundMessagingAddresses: arr[i].outboundMessagingAddresses,
      //   outboundEmailAddress: arr[i].outboundEmailAddress,
      //   peerIds: arr[i].peerIds,
      //   suppressInQueueCallRecording: arr[i].suppressInQueueCallRecording,
      // }));
    // }
  }
  console.log(dataArray);
  return dataArray;
};

let opts = { 
  "pageNumber": 1, // Number | Page number
  "pageSize": 100, // Number | Page size
  "sortOrder": "asc", // String | Note: results are sorted by name.
  "name": "*BCROS*", // String | Include only queues with the given name (leading and trailing asterisks allowed)
  // "id": ["id_example"], // [String] | Include only queues with the specified ID(s)
  "divisionId": ["b6d361db-13a9-4c98-9373-3729e1d8f1cf", "a30f4ead-4054-4df3-aa5e-dbef6c534d8c"], // [String] | Include only queues in the specified division ID(s)
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
    getIds(data.entities);
  })
  .catch((err) => {
    console.log("There was a failure calling getRoutingQueues");
    console.error(err);
  });
