import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBCICC;

// Create API instance
const usersApi = new platformClient.UsersApi();

const idsArray = [];

const getIds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // idsArray.push({name: arr[i].name, email: arr[i].email});
    // idsArray.push(arr[i].id);

    // Find autoanswer users
    if (arr[i].acdAutoAnswer) {
        idsArray.push({id: arr[i].id, acdAutoAnswer: false});
      }
  }
  return idsArray;
};

let opts = {
  pageSize: 100, // Number | Page size
  pageNumber: 1, // Number | Page number
  // "id": ["id_example"], // [String] | A list of user IDs to fetch by bulk
  // "jabberId": ["jabberId_example"], // [String] | A list of jabberIds to fetch by bulk (cannot be used with the id parameter)
  sortOrder: "ASC", // String | Ascending or descending sort order
  expand: ["skills", "profileSkills"], // [String] | Which fields, if any, to expand
  // "integrationPresenceSource": "integrationPresenceSource_example", // String | Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand. When using this parameter the maximum number of users that can be returned is 100.
  // state: "active", // String | Only list users of this state
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return usersApi.getUsers(opts);
  })
  .then((data) => {
    // console.log(data.total);
    // getIds(data.entities);
    console.log(getIds(data.entities));
    // console.log(getIds(data.entities));
    return getIds(data.entities);
  })
  .catch((err) => {
    console.log("There was a failure calling patchUsersBulk");
    console.error(err);
  });

/*
[
  {
    id: '5266cbc8-27ed-446d-bfa6-1b716482bd92',
    name: 'Adrienne Roler',
    division: {
      id: '80820210-8dce-491b-9c11-a2f3118e3fe2',
      name: 'SBC_IDIM_PROD',
      selfUri: '/api/v2/authorization/divisions/80820210-8dce-491b-9c11-a2f3118e3fe2'
    },
    chat: {
      jabberId: '65aac0ada73cd21b93e4b39f@maximuscanada-sbc-internalcc.orgspan.com'  
    },
    department: 'IDIM',
    email: 'adrienne.roler@gov.bc.ca',
    primaryContactInfo: [ [Object] ],
    addresses: [],
    state: 'active',
    title: 'Senior Team Lead BA',
    username: 'adrienne.roler@gov.bc.ca',
    version: 37,
    skills: [],
    acdAutoAnswer: false,
    selfUri: '/api/v2/users/5266cbc8-27ed-446d-bfa6-1b716482bd92'
  }
]
  */
