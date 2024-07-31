import { platformClient, client, orgOauth } from "../../config.js";
import { division } from "./uat.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

const architectApi = new platformClient.ArchitectApi();

const dataArray = [];

const getIds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].division.id === division.UAT || arr[i].division.id === division.TRN) dataArray.push(arr[i]);
    // dataArray.push(arr[i]);
  }
  return dataArray;
};

let opts = { 
  "expand": "schema", // String | Expand instructions for the result
  "pageNumber": 1, // Number | Page number
  "pageSize": 100, // Number | Page size
  "sortBy": "name", // String | Sort by
  "sortOrder": "ASC", // String | Sort order
  "name": "*BCROS*", // String | Name of the Schedule Group to filter by.
  "divisionId": [ division.UAT, division.TRN ] // [String] | List of divisionIds on which to filter.
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return architectApi.getFlowsDatatables(opts);
  })
  .then((data) => {
    return getIds(data.entities);
  })
  .then((data) => {
    let promises = data.map((body) => {
      let newBody = {
        ...body,
        name: body.name.replace("BCROS", "BCRDS"),
      };
      console.log(newBody.name)
      return architectApi.postFlowsDatatables(newBody);
    });

    return Promise.all(promises).then(() => {
      console.log("Success! Data has been modified.");
      console.log(promises);
    });
  })
  .catch((err) => {
    console.log("There was a failure calling request");
    console.error(err);
  });