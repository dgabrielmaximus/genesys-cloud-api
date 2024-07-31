import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBCICC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

let bodyArr = [
  { name: 'BCeID | Account Maintenance (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCeID | Activation code (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCeID | Application Registration (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCeID | Call Transferred in Error (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCeID | Escalation to IDIM Tier 3 (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCeID | Orphaned Accounts (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCeID | Other (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCeID | Other not covered (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCeID | Password Reset (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCeID | Unlock account (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCeID | User ID Recovery (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCSC | Call Transferred in Error (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCSC | Data Issues (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCSC | Escalation to IDIM Tier 3 (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCSC | Incident-JIRA (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCSC | Incident-Resolved (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCSC | Other (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCSC | Other not covered (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCSC | Pairing (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCSC | Person Credential (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCSC | Question-Resolved (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCSC | Verification-self serve App/ BC Token (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  { name: 'BCSC | Wallet (Training)', division: { id: 'a30f4ead-4054-4df3-aa5e-dbef6c534d8c'}},
  
  

];

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    let idArr = [];
    let promises = bodyArr.map((body) => {
      return routingApi.postRoutingWrapupcodes(body).then((data) => {
        idArr.push({ id: data.id });
      });
    });

    return Promise.all(promises).then(() => {
      console.log(idArr);
      return idArr;
    });
  })
  .catch((err) => {
    console.log("There was a failure authenticating the client.");
    console.error(err);
  });
