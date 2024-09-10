import { platformClient, client, orgOauth } from "../../config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

const responseManagementApi = new platformClient.ResponseManagementApi();

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    let opts = {
      pageNumber: 1, // Number | Page number
      pageSize: 100, // Number | Page size
      // "messagingTemplateFilter": "messagingTemplateFilter_example", // String | Returns a list of libraries that contain responses with at least one messaging template defined for a specific message channel
      // "libraryPrefix": "libraryPrefix_example" // String | Returns a list of libraries that contain the prefix provided
    };
    return responseManagementApi.getResponsemanagementLibraries(opts);
  })
  .then((libraryData) => {
    let libraryIds = [];
    libraryData.entities.map((library) => {
      libraryIds.push(library.id);
    });
    return libraryIds;
  })
  .then((libraryIds) => {
    let opts = {
      pageNumber: 1, // Number | Page number
      pageSize: 25, // Number | Page size
      // "expand": "expand_example" // String | Expand instructions for the return value.
    };
    let promises = libraryIds.map((libraryId) => {
      return responseManagementApi.getResponsemanagementResponses(libraryId, opts)
    })

    return Promise.all(promises).then((responses) => {
      let responsesData = [];
      responses.map((response) => {
        response.entities.map((res) => {
          if (res.name.includes("BCROS")) {
            responsesData.push({
              ...res,
                name: res.name.replace("BCROS", "BCRDS"),
            });
          }
        });
      });
      return responsesData;
    })
  })
  .then((responsesData) => {
    // console.log(responsesData);
    let promises = responsesData.map((body) => {
      // console.log(body);
      return responseManagementApi.putResponsemanagementResponse(body.id, body);
    });

    return Promise.all(promises).then(() => {
      console.log("Success! Responses have been modified.");
    });
  })
  .catch((err) => {
    console.log("There was a failure calling responseManagementApi");
    console.error(err);
  });
