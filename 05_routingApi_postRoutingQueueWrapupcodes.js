import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBCICC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

let queueId = "5c64324e-cf4b-453c-8cea-476cf07d22fa";
let body = [
  { id: '7bf659cc-6844-4d8e-9d06-d2370af5358e' },
  { id: 'acd05e8e-12f4-45f7-9335-c33909255122' },
  { id: 'b2f8f099-1545-4c9b-9580-a43a9292bb53' },
  { id: '76abbeb0-14b4-462c-b4ed-46beafc99518' },
  { id: '69ea4e50-9f2a-4f17-80d4-b6a8dab99c74' },
  { id: '4dfb9b1a-431a-4563-a3d8-0b3265cc411d' },
  { id: '383ecb1c-4fd0-4917-b156-fd482b165273' },
  { id: '6019228f-5cf3-4bbc-88f8-c6432c8cc03e' },
  { id: '78238a0a-0f56-49b8-95b5-aaabb36b8071' },
  { id: 'd2db2253-2785-4bde-844a-71ff10532547' },
  { id: '4e0b0385-2f56-49d2-b4e5-6aa451cc5321' },
  { id: '1689c21f-a2b3-42d5-b6ab-2ba54b9ef5c2' },
  { id: '83e9f727-a6fb-495f-b920-b5a7839b2e73' },
  { id: '7ca7990a-88a1-47ca-8959-135b0361a18e' },
  { id: '634fce47-f6ff-456b-97b4-1c343c48e3ac' },
  { id: '4af9fae4-716e-4713-bdd1-2d48cc85e291' },
  { id: 'ee83299e-e713-4390-a6b8-f484046826d7' },
  { id: '973b9c50-363a-4ee4-97e2-9ecdc766e07e' },
  { id: '91b7b790-e2ca-4d8e-aef1-ced894115fdc' },
  { id: '79dbe9c1-996c-4edb-8d17-2c4f085e490d' },
  { id: '1a92fc77-2789-4bef-a765-6dfd44bd8ec1' },
  { id: '7cde0aa2-7da5-4060-b99f-47af9407f271' },
  { id: 'b4ff7e12-6812-4d49-a3b6-960e7d932bd2' }
]; // Object | List of wrapup codes

// Create a wrap-up code
client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return routingApi.postRoutingQueueWrapupcodes(queueId, body);
  })
  .then((data) => {
    console.log(
      `postRoutingQueueWrapupcodes success! data: ${JSON.stringify(
        data,
        null,
        2
      )}`
    );
  })
  .catch((err) => {
    console.log("There was a failure calling postRoutingQueueWrapupcodes");
    console.error(err);
  });
