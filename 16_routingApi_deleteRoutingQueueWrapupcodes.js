import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBCICC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

let queueId = "700ea890-efe1-4eec-a40f-fd88bd459d7b";

let bodyArr = [
  'f3573386-75d2-4bdd-9876-7c5562f265e4',
  '9af787f3-2bdf-4a3a-a04e-07a3006b88fe',
  '9f633cb2-9f5a-433f-9e05-d3be3433ee5f',
  '8da5c14a-201d-44a7-8839-d3540cc6a731',
  '6dc2af79-6f3f-461b-8296-bf34098728a6',
  'fd0d16da-802a-4679-b4af-c94f4edab650',
  'f6730af4-f537-48b4-b738-572503f16334',
  '02e41232-1312-4749-a0c5-486873f7bd37',
  'a0d459da-7537-4253-8162-7639b1a78d3e',
  '87a52907-3dbd-44e4-a3e7-7ee517466306',
  '9902e659-e3ac-461b-841b-e51897a967f0',
  'eec11f13-b139-433f-b6a5-76be85e092bc',
  '3bedd5fd-a8bd-4436-927a-168632718d5f',
  '8db44201-cb6a-446b-9181-4366602c34d5',
  '7be6ae04-cfd0-44d2-a373-330dacb4ac12',
  'd13c3e7a-5da4-469f-ad52-f8e910bf1de7',
  '2bae0e04-b7d2-4612-818f-1c51947d6846',
  '2c5f5d5d-7cf1-4a97-b02a-4a2c2f0ed944',
  'bebdc172-1d65-4cc6-a84c-ae0923880a53',
  '68872213-db39-4df8-95ba-3611e426fcbd',
  '8889ce3b-055c-4724-b4f0-265efa518576',
  '40adba59-462e-4a11-a049-5cc9e917d009'
]; // List of wrapup codes

  client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    let promises = bodyArr.map((body) => {
      return routingApi.deleteRoutingQueueWrapupcode(queueId, body)
    });

    return Promise.all(promises).then(() => {
      console.log("Success! Wrapup codes deleted.");
    });
  })
  .catch((err) => {
    console.log("There was a failure authenticating the client.");
    console.error(err);
  });