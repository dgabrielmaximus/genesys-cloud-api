import { platformClient, client, orgOauth } from "../../config.js";
import { division } from "./prod.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

const usersApi = new platformClient.UsersApi();

const dataArray = [];

const getIds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].department && arr[i].department.includes("BCROS"))
      dataArray.push({
        id: arr[i].id,
        department: arr[i].department.replace("BCROS", "BCRDS"),
        version: arr[i].version,
      });
  }
  return dataArray;
};

let opts = {
  pageNumber: 1, // Number | Page number
  pageSize: 100, // Number | Page size
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return usersApi.getUsers(opts);
  })
  .then((data) => {
    // console.log(data.entities);
    // console.log(getIds(data.entities));
    return getIds(data.entities);
  })
  .then((usersData) => {
    let promises = usersData.map((body) => {
      console.log(body)
      return usersApi.patchUser(body.id, body);
    });

    return Promise.all(promises).then(() => {
      console.log("Success! User departments have been modified.");
    });
  })
  .catch((err) => {
    console.log("There was a failure calling getUsers");
    console.error(err);
  });
