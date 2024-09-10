import { platformClient, client, orgOauth } from "../../config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

const externalContactsApi = new platformClient.ExternalContactsApi();

let opts = {
  pageNumber: 1, // Number | Page number
  pageSize: 100, // Number | Page size,
  q: "BCRDS"
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return externalContactsApi.getExternalcontactsContacts(opts);
  })
  .then((data) => {
    return data.entities;
  })
  .then((externalContactsData) => {
    let promises = externalContactsData.map((body) => {
      let newBody = {
        ...body,
        lastName: body.lastName.replace("BCROS", "BCRDS"),
      };
      return externalContactsApi.putExternalcontactsContact(body.id, newBody);
    });

    return Promise.all(promises).then(() => {
      console.log("Success! External contacts have been modified.");
    });
  })
  .catch((err) => {
    console.log("There was a failure calling getUsers");
    console.error(err);
  });
