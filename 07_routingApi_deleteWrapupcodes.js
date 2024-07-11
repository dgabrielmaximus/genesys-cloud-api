import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

let bodyArr = [
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
  'f9c7154b-38bc-4d81-ad64-5f09b2ec14b6'
]; // List of wrapup codes

  client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    let promises = bodyArr.map((body) => {
      return routingApi.deleteRoutingWrapupcode(body)
    });

    return Promise.all(promises).then(() => {
      console.log("Success! Wrapup codes deleted.");
    });
  })
  .catch((err) => {
    console.log("There was a failure authenticating the client.");
    console.error(err);
  });