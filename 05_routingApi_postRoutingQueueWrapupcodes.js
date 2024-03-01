import { platformClient, client, clientId, clientSecret } from "./config.js";

// Create API instance
const routingApi = new platformClient.RoutingApi();

let queueId = "49537f7b-bb1a-4e76-8474-ede2ce437f3d"; // String | Queue ID
let body = [
  { "id": "c58e9bfc-86b8-4900-8ee1-ffef33dfd830" },
  { "id": "755925a8-9735-4afb-add9-7212a322a5e0" },
  { "id": "6e90b1af-57b4-4908-b942-6aa431d5ae3c" },
  { "id": "9698abf4-8f14-4f3e-8c45-d934a6d3809c" },
  { "id": "b9ddb5e6-8925-4431-abdd-3afa4e65215d" },
  { "id": "7901d5b8-d457-466a-baeb-a2478b0c4d46" },
  { "id": "b1f21c12-8bbb-414c-8016-75f8e6e5bc1f" },
  { "id": "150b1b06-244b-4a3b-95d5-8d23164918a4" },
  { "id": "7e9f4f5c-936e-4122-8461-9a7194c77904" },
  { "id": "422e0335-58a9-4466-95cd-d11c06e29007" },
  { "id": "9b025da3-0813-4738-be24-1af07d06bc00" },
  { "id": "782a2bb1-544c-43c8-acb4-4228381903ca" },
  { "id": "ae36a813-77e4-4b73-b76c-e006e5121c34" },
  { "id": "64cea50a-0116-4d10-81ea-1de70a0c46d6" },
  { "id": "06360308-c688-49d6-8b07-4651ffa6c842" },
  { "id": "177953a8-d1f9-4611-b203-4cf6c029e608" },
  { "id": "a451b961-3b3d-43b0-bece-2533c874d47f" },
  { "id": "762c60a8-54de-423f-870c-3d7137fda3e3" },
  { "id": "08b13f6b-9a02-4f50-bdb4-ab47dd28f9a4" },
  { "id": "92a0520a-d1f5-4f7e-ac65-5a8366e2aee6" },
  { "id": "fd563305-6bc7-4396-bc6e-8a5474f2f3bd" },
  { "id": "33219686-8b94-4930-8780-18b845eb59b1" },
  { "id": "4c8543e8-20fc-4963-82ba-77ba77f05b9e" },
  { "id": "2a0480bd-ce69-43a9-b0bc-5fe21568a7d8" },
  { "id": "56eb920f-2ed0-436b-8f1d-54c1886e1b07" },
  { "id": "528f4c5f-c6f1-437a-a0ed-1116835673eb" },
  { "id": "0a67112b-fbe7-45fe-90a8-2078cac918e1" },
  { "id": "221bc8fd-c667-41c1-84aa-3b1bf087a939" },
  { "id": "34b0c9e7-0dc8-4574-98f0-663946b0cc27" },
  { "id": "03e4d349-7982-4a10-ad27-b296da17dc73" },
  { "id": "06c951dd-32f4-42fe-b76d-ba3873956422" },
  { "id": "21b4d204-debf-4a27-a16d-0be4b2e88188" },
  { "id": "a5b5ac7a-61c2-4dd5-a411-c8907e45b286" },
  { "id": "d3b4dcc1-9372-4ef0-9040-b9cc1a5e5be1" },
  { "id": "d5cb4005-f865-41c5-9f0f-c33c5ff8673f" },
  { "id": "cdbe0d2e-8303-4937-ad1f-cab18d673701" },
  { "id": "36fc6dcd-e7a2-4d81-80f1-b76cfb2980a0" },
  { "id": "71a50f02-8495-44d3-957c-f933e831e0dc" },
  { "id": "0fb4b710-0dd1-405a-b325-6ccaed2c9ea4" },
  { "id": "ca727fcf-2999-4aa3-a721-46919739487a" },
  { "id": "66c77e5a-ab5d-4466-ad2c-3f0dbe4a4651" },
  { "id": "75ec443f-a309-4490-a2e9-7379829c980e" },
  { "id": "f8a97765-fbcc-451b-84da-5b46cba47e7f" },
  { "id": "605d0278-52e6-4ef9-8bc9-ec5f1ae11bc2" },
  { "id": "84242b53-16c6-4467-b974-6d63c9f2eba6" },
  { "id": "a0d5d0ab-ac9d-4e0d-a1dc-1f30756b9190" },
  { "id": "8e63b779-e9fa-4bba-9532-6da8f1e08a99" },
  { "id": "dcd26429-01e2-43d0-96cf-04956a7f8f40" },
  { "id": "2ee228ed-157d-445e-a4bb-99b979f50910" },
  { "id": "4003f2e1-d22d-4754-852b-a43c022b5cad" }
]

; // Object | List of wrapup codes

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
