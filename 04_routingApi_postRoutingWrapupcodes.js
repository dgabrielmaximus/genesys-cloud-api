import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.FEC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

let bodyArr = [
  { name: 'Election workers pay / Paie de travailleur électoral'},
  { name: 'Election Results / Résultats d’élection'},
  { name: 'Client disconnect / Déconnexion du client'},
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
