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
  "pageNumber": 1, // Number | Page number
  "pageSize": 100, // Number | Page size
  "sortBy": "name", // String | Sort by
  "sortOrder": "ASC", // String | Sort order
  "name": "*BCROS*", // String | Name of the Schedule Group to filter by.
  // "divisionId": [ division.UAT, division.TRN ] // [String] | List of divisionIds on which to filter.
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return architectApi.getArchitectIvrs(opts);
  })
  .then((data) => {
    return getIds(data.entities);
  })
  .then((ivrData) => {
    let promises = ivrData.map((body) => {
      let newBody = {
        ...body,
        name: body.name.replace("BCROS", "BCRDS"),
      };
      console.log(newBody.name)
      return architectApi.putArchitectIvr(body.id, newBody);
    });

    return Promise.all(promises).then(() => {
      console.log("Success! IVRs have been modified.");
    });
  })
  .catch((err) => {
    console.log("There was a failure calling getArchitectIvrs");
    console.error(err);
  });