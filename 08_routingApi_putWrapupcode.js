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
  {
    id: 'b930bdc5-a63e-4ac0-b563-325c751079a9',
    name: 'BCSC|Call Transferred in Error'
  },
  {
    id: '3c876e89-7488-44b5-91b6-57eed7e419b5',
    name: 'BCSC|Data Issues'
  },
  {
    id: 'c968bd6f-0736-42dc-8565-7932f2ce1a39',
    name: 'BCSC|Escalation to IDIM Tier 3'
  },
  {
    id: '3d4ed786-0de4-4e51-a01c-7f07b25718b6',
    name: 'BCSC|Incident-JIRA'
  },
  {
    id: '749602ac-47d3-47e1-9ef0-b52016ecc0d1',
    name: 'BCSC|Incident-Resolved'
  },
  { id: 'e3efb568-f51a-4e8c-bf1a-c4c28e12fea6', name: 'BCSC|Other' },
  {
    id: '4c454ba4-ec14-4753-8b6f-842d9d3dbb37',
    name: 'BCSC|Other not covered'
  },
  { id: '5dd690d7-47bf-4565-ba00-a97f05a3a24d', name: 'BCSC|Pairing' },
  {
    id: 'db2d68c7-5b0b-4d6e-8929-9fa846793884',
    name: 'BCSC|Person Credential'
  },
  {
    id: 'ab50afda-97a9-46a4-be78-e67c218fe7c0',
    name: 'BCSC|Question-Resolved'
  },
  {
    id: '2c4356da-c67b-4efb-b516-14be4f13160a',
    name: 'BCSC|Verification-self serve App/ BC Token'
  },
  { id: '3c347825-ce6d-4eae-bd11-c6d521b4f53e', name: 'BCSC|Wallet' }
]; // List of wrapup codes

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    let promises = bodyArr.map((body) => {
      let newName = {
        name: body.name.split("|").join(" | "),
      };
      // newName.name = body.split("|").join(" | ");
      return routingApi.putRoutingWrapupcode(body.id, newName);
    });

    return Promise.all(promises).then(() => {
      console.log("Success! Wrapup codes have been modified.");
      console.log(promises);
    });
  })
  .catch((err) => {
    console.log("There was a failure authenticating the client.");
    console.error(err);
  });
