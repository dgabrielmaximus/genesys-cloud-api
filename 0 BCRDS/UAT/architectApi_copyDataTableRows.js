import { platformClient, client, orgOauth } from "../../config.js";
import { division } from "./uat.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

const architectApi = new platformClient.ArchitectApi();

let dataArray = [];

const getIds = (arr, keyword) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.includes(keyword) && arr[i].name.includes("UAT"))
      dataArray.push(arr[i]);
  }
  return dataArray;
};

let opts = {
  // "expand": "schema", // String | Expand instructions for the result
  pageNumber: 1, // Number | Page number
  pageSize: 100, // Number | Page size
  sortBy: "name", // String | Sort by
  sortOrder: "ASC", // String | Sort order
  name: "*BCR*", // String | Name of the Schedule Group to filter by.
  divisionId: [division.UAT, division.TRN], // [String] | List of divisionIds on which to filter.
};

let rowsOpts = {
  pageNumber: 1, // Number | Page number
  pageSize: 25, // Number | Page size
  showbrief: false, // Boolean | If true returns just the key value of the row
  sortOrder: "ascending", // String | Sort order
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return architectApi.getFlowsDatatables(opts);
  })
  .then((data) => {
    return getIds(data.entities, "BCROS");
  })
  .then((data) => {
    let promises = data.map((body) => {
      return architectApi.getFlowsDatatableRows(body.id, rowsOpts);
    });
    architectApi.getFlowsDatatables(opts).then((data) => {
      dataArray = [];
      return getIds(data.entities, "BCRDS");
    });
    return Promise.all(promises).then((data) => {
      let otherPromise = data.map((body, index) => {
        let postPromise = body.entities.map((row) => {
          let newRow = {
            ...row,
            key: row.key.replace("BCROS", "BCRDS"),
          };
          return architectApi.postFlowsDatatableRows(dataArray[index].id, newRow);
        });
        return Promise.all(postPromise).then(() => {
          console.log("Success! Items have been modified.");
          console.log(postPromise);
        });
      });
      return Promise.all(otherPromise).then(() => {
        console.log("Success! All rows have been modified.");
      });
    });
  })
  .catch((err) => {
    console.log("There was a failure calling request");
    console.error(err);
  });
