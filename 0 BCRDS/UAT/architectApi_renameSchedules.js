import { platformClient, client, orgOauth } from "../../config.js";
import { division } from "./uat.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

const architectApi = new platformClient.ArchitectApi();

const dataArray = [];

const getIds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    dataArray.push(arr[i]);
  }
  return dataArray;
};

let opts = { 
  "pageNumber": 1, // Number | Page number
  "pageSize": 100, // Number | Page size
  "sortBy": "name", // String | Sort by
  "sortOrder": "ASC", // String | Sort order
  "name": "*BCROS*", // String | Name of the Schedule Group to filter by.
  // "scheduleIds": "scheduleIds_example", // String | A comma-delimited list of Schedule IDs to filter by.
  "divisionId": [ division.UAT, division.TRN ] // [String] | List of divisionIds on which to filter.
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return architectApi.getArchitectSchedules(opts);
  })
  .then((data) => {
    return getIds(data.entities);
  })
  .then((scheduleGroupData) => {
    let promises = scheduleGroupData.map((body) => {
      let newBody = {
        ...body,
        name: body.name.replace("BCROS", "BCRDS"),
      };
      console.log(newBody.name)
      return architectApi.putArchitectSchedule(body.id, newBody);
    });

    return Promise.all(promises).then(() => {
      console.log("Success! Schedule Groups have been modified.");
    });
  })
  .catch((err) => {
    console.log("There was a failure calling patchUsersBulk");
    console.error(err);
  });