import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

let queueId = "a70e97d5-9c68-4c04-b60d-87fb0d846bb2";

let bodyArr = [
  'aac83304-2931-4872-a019-e200beb28fc4',
  '4c1647a3-6210-4866-98f1-7ab48eac6ae0',
  'cefec09f-9760-458f-9120-c9f3a9965752',
  '50050952-5d73-4cac-a99a-641b909c222e',
  '084dd80f-0382-4fc6-a847-12116d929081',
  '3ccc1a7c-44e0-4118-aba2-ad30271fa4af',
  'a9219fa6-4a23-43bd-87b2-bd00aafea6e3',
  'e8595264-3ebb-4403-a408-5b96730331df',
  '63934cff-cf24-4564-b5de-3f90062c13b3',
  '4c078731-ad1f-42f0-988d-3a3f989747bb',
  '46ec6cb1-7f7a-4d17-8de1-0318b92d679d',
  '23f1acf7-30c0-4f4e-bf35-cfe8f4d268b3',
  '022b5cf7-3165-4618-b732-54e116d01c2b',
  'f9dfdfc8-d281-4e74-9c0f-f65caeda8922',
  'ae6f34ee-8954-481a-bbac-331b0abaab0e',
  '36ad82c0-ab97-4ea9-8cad-558897f7ced2',
  '873bc987-072a-469a-88ef-0fba92f25254',
  '57d7128d-7b80-47da-aabe-2e2a2e8ea784',
  '78e73b00-355c-4c03-9e4f-606adb9e6cb7',
  'd94155c5-edbe-4f4d-887e-807a72c230bf',
  'f9c7154b-38bc-4d81-ad64-5f09b2ec14b6',
  '33219686-8b94-4930-8780-18b845eb59b1',
  '3d919097-2879-4bfd-9a69-4f524b03ceb3',
  'a0a45290-9a12-4575-9a49-9b13db1c0844'
]

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