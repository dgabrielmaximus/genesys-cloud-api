const dotenv = require("dotenv");
dotenv.config();
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const region = process.env.REGION; //https://developer.genesys.cloud/platform/api/

const platformClient = require("purecloud-platform-client-v2");
const client = platformClient.ApiClient.instance;
client.setEnvironment(region);

// Create API instance
const routingApi = new platformClient.RoutingApi();

let bodyArr = [
  '8620ea57-6282-4118-b986-48cdf7c736c9',
  'ee1fcb24-04d6-4d44-9090-4a246748bdde',
  'b6219c1a-5719-4e58-b1e3-d3e6c7e2867c',
  '7a422f84-200b-4605-92ae-3f8be51e4d5b',
  '2b4faa42-6bbf-46b0-bcc8-bb851e7eac1d',
  '1495df02-f48f-4967-aa81-6178a80e9766',
  '542f4987-0d17-45b7-8643-1b439fe0354c',
  'bbee91aa-636a-4802-a905-3449830c0250',
  '4f409e08-827a-4fce-9968-52f5515e4b5b',
  'd5846847-1aa1-4471-8503-a19e27a9fa57',
  '9a3f7bf0-ff17-4681-9633-4fa82bd673df',
  'a9e335cf-01ed-4949-8567-745c01e5f5c6',
  'd7de5fcb-93d1-40ef-86ab-040d3f19d7ee',
  '2d8c40fc-2848-4ecf-8d66-17278c62c7a5',
  'a0161ced-7e6c-435d-b5a1-ea0710bab8de',
  'fb0b1dcd-6497-4926-b386-5bbf35e76888',
  '3db924e8-e264-4f60-8096-3279a5a7b4fc',
  '6c497b8e-889b-4816-ad85-f47a8c5cc773',
  'e03ae8ca-24ce-4a2d-b59c-a44ff1e9341f',
  'a5c10314-d473-4fe0-8f33-1554311549f8',
  '268fa143-5d4f-4daa-bdc8-7a012b218149',
  '68ebc730-16bf-4e94-b856-1627a9e03ff5',
  '84cd7fa6-a0da-456e-ac1a-ef4433d0869e',
  'd803b4c8-d741-4407-b373-7479cb672dcb',
  'b471cbce-d8d5-4c44-971d-3067660ab9e7',
  '1fc39944-bc7e-408d-b94a-fea9c3b25ef6',
  'f85d951b-70b0-4926-a4c4-9667cc037d95',
  'bf4b0380-cac2-434c-b476-a9b3afdea434',
  '5b617666-98c5-4963-a144-e48e2463a792',
  'bac80ef6-20ce-4ec6-a940-6934e2377269'
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