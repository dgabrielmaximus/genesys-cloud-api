import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBC;

// Create API instance
const routingApi = new platformClient.RoutingApi();

let bodyArr = [
  { name: "WFM | Decline" },
  { name: "WFM | Sick at 75%" },
  { name: "WFM | Sick at 100%" },
  { name: "WFM | Sick with 25% tup" },
  { name: "WFM | Sick child" },
  { name: "WFM | Sick spouse" },
  { name: "WFM | Bereavement" },
  { name: "WFM | Medical appt" }
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
