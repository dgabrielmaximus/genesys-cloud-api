import { platformClient, client, orgOauth } from "../../config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.ICC;

const groupsApi = new platformClient.GroupsApi();

const dataArray = [];

const getIds = (arr) => {
  arr.map((object) => {
    if (object.name.includes("BCROS") && !object.name.includes("UAT")) {
    dataArray.push(object);
    }
  });
  return dataArray;
};

let opts = {
  pageSize: 1000, // Number | Page size
  pageNumber: 1, // Number | Page number
  // "id": ["id_example"], // [String] | id
  // "jabberId": ["jabberId_example"], // [String] | A list of jabberIds to fetch by bulk (cannot be used with the id parameter)
  sortOrder: "ASC", // String | Ascending or descending sort order
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return groupsApi.getGroups(opts);
  })
  .then((data) => {
    return getIds(data.entities);
  }).then((groupData) => {
    let promises = groupData.map((group) => {
      let body = {
        ...group,
        name: group.name.replace("BCROS", "BCRDS")
      };
      console.log(body)
      return groupsApi.putGroup(group.id, {body});
    });
    return Promise.all(promises).then(() => {
      console.log("Success! Groups have been modified.");
      // console.log(promises);
    });
  })
  .catch((err) => {
    console.log("There was a failure calling getGroups");
    console.error(err);
  });

/*
result:
{
  entities: [
    {
      id: '0189468d-511a-4f55-9b03-267d090570c1',
      name: 'cc.dev',
      dateModified: '2023-12-28T16:44:03.146Z',  
      memberCount: 2,
      state: 'active',
      version: 3,
      type: 'official',
      rulesVisible: true,
      visibility: 'owners',
      chat: [Object],
      rolesEnabled: true,
      owners: [Array],
      selfUri: '/api/v2/groups/0189468d-511a-4f55-9b03-267d090570c1'
    }
  ],
  pageSize: 1,
  pageNumber: 1,
  total: 106,
  firstUri: '/api/v2/groups?pageSize=1&pageNumber=1',
  nextUri: '/api/v2/groups?pageSize=1&pageNumber=2',
  lastUri: '/api/v2/groups?pageSize=1&pageNumber=106',
  selfUri: '/api/v2/groups?pageSize=1&pageNumber=1',
  pageCount: 106
}
*/
