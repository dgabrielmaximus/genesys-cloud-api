import { platformClient, client, orgOauth } from "../../config.js";
import { division } from "./prod.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

const routingApi = new platformClient.RoutingApi();

const dataArray = [];

let idObj = {};

const getIds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    idObj = { id: arr[i].id, name: arr[i].name };
    dataArray.push(idObj);
  }
  return dataArray;
};

let opts = {
  pageSize: 500, // Number | Page size
  pageNumber: 1, // Number | Page number
  "sortBy": "name", // String | Sort by
  // "sortOrder": "ascending", // String | Sort order
  "name": "*BCROS*", // String | Wrapup code's name ('Sort by' param is ignored unless this field is provided)
  // "id": ["id_example"], // [String] | Filter by wrapup code ID(s)
  // divisionId: [ division.PROD ], // [String] | Filter by division ID(s)
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return routingApi.getRoutingWrapupcodes(opts);
  })
  .then((data) => {
    return getIds(data.entities);
  })
  .then((wrapupData) => {
    // console.log(wrapupData);
    let promises = wrapupData.map((body) => {
      let newBody = {
        name: body.name.replace("BCROS", "BCRDS"),
      };
      console.log(newBody)
      return routingApi.putRoutingWrapupcode(body.id, newBody);
    });

    return Promise.all(promises).then(() => {
      // console.log("Success! Wrapup codes have been modified.");
      // console.log(promises);
    });
  })
  .catch((err) => {
    console.log("There was a failure calling getRoutingWrapupcodes");
    console.error(err);
  });
