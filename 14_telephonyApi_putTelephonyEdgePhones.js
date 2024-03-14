import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBCICC;

const telephonyApi = new platformClient.TelephonyProvidersEdgeApi();

let phoneIdArr = 
[
  {
    id: '6a01949c-208c-4f60-8277-540b44ff61ad',
    name: 'Deirdre Clancy WebRTC PHONE [5b42824]',
    lines: {
      id: 'af097bd2-38bd-4713-95f5-570f2a98cc98',
      name: '65e8f9c73453932d53c7bfb5+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: 'e7eb44b1-bd8a-460d-98b5-acd0d5bb1756',
      name: 'Deirdre Clancy',
      selfUri: '/api/v2/users/e7eb44b1-bd8a-460d-98b5-acd0d5bb1756'
    }
  },
  {
    id: '838f59b9-a811-4563-a70c-e1114c6aa2ad',
    name: 'Eve Kelly WebRTC PHONE [95aa4de]',
    lines: {
      id: '7677017a-a65e-40e0-919d-0f74dbcafd29',
      name: '65e8eee958beb42e0804bf33+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '60ee6fd4-f4f1-4e92-bf7b-bec730ce6dda',
      name: 'Eve Kelly',
      selfUri: '/api/v2/users/60ee6fd4-f4f1-4e92-bf7b-bec730ce6dda'
    }
  },
  {
    id: '0cf7a338-c49a-4dc0-b43a-2b788db178f0',
    name: 'Hannah Wasylik WebRTC PHONE [57205b2]',
    lines: {
      id: '6e0b7066-497b-4ca0-b86d-2d5e734a56c3',
      name: '65e8e53a9149c72e65c1c5a4+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '3c211733-2b12-44c0-9e70-b4c8a81cb410',
      name: 'Hannah Wasylik',
      selfUri: '/api/v2/users/3c211733-2b12-44c0-9e70-b4c8a81cb410'
    }
  },
  {
    id: '2c46f7aa-79c6-46a3-b9bf-5efb83efc611',
    name: 'Jennifer Weldon WebRTC PHONE [9e78098]',
    lines: {
      id: '292ca519-3d7d-48e6-a30d-360ebb0cfb11',
      name: '65e8ed42648098327fea6902+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '1b023098-1a1a-426e-bbbb-f83f74f64b50',
      name: 'Jennifer Weldon',
      selfUri: '/api/v2/users/1b023098-1a1a-426e-bbbb-f83f74f64b50'
    }
  },
  {
    id: '1e8c8920-9d97-4384-9ba0-0bd26f0209a6',
    name: 'JoeAnn Lee WebRTC PHONE [253378b]',
    lines: {
      id: '973f7c83-20fc-48b1-bc29-582e71536398',
      name: '65e8fac7ce867f1c1b343e00+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '3bec1ed5-b5c6-4ccb-b135-02cf49de3f7e',
      name: 'JoeAnn Lee',
      selfUri: '/api/v2/users/3bec1ed5-b5c6-4ccb-b135-02cf49de3f7e'
    }
  },
  {
    id: '98fd36bb-ffc8-42a2-9fa3-2f055900c516',
    name: 'Joshua Thiessen WebRTC PHONE [edf6218]',
    lines: {
      id: '5f7792f9-148e-499d-acb0-b7183cddf44d',
      name: '65e8e8016204a32d92900535+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '9bc8685d-f9fc-485a-b6ac-be3de270fd1c',
      name: 'Joshua Thiessen',
      selfUri: '/api/v2/users/9bc8685d-f9fc-485a-b6ac-be3de270fd1c'
    }
  },
  {
    id: '2a053d7f-1e61-47da-8f2b-20fa918110a5',
    name: 'Kathryn McAllister WebRTC PHONE [c88965e]',
    lines: {
      id: 'dde1c932-abbb-4461-9265-6e21fe13633e',
      name: '65e8fb13dc4f422de5e8fddf+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '611add27-59b4-4fd9-834e-1671386dc58e',
      name: 'Kathryn McAllister',
      selfUri: '/api/v2/users/611add27-59b4-4fd9-834e-1671386dc58e'
    }
  },
  {
    id: 'f7d903c2-9fce-44e2-ab25-d1aa0838faeb',
    name: 'Kathy Langlois WebRTC PHONE [324785e]',
    lines: {
      id: '27afc52b-1d2c-4a68-9e4a-1793f8a1ad02',
      name: '65e8e74caa5653582fde0561+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: 'b2e23ffc-21a7-4ceb-b5ea-967f7b8bef7d',
      name: 'Kathy Langlois',
      selfUri: '/api/v2/users/b2e23ffc-21a7-4ceb-b5ea-967f7b8bef7d'
    }
  },
  {
    id: '269af4bf-423a-410f-92f1-8caf694c39c3',
    name: 'Katie Inouye WebRTC PHONE [8aca4b2]',
    lines: {
      id: '90582b16-071c-4d3b-8c37-b020b7309f14',
      name: '65e8e51d79fe652a793483bd+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '568029a7-7d8f-4a24-b66f-0ff41b7bdadd',
      name: 'Katie Inouye',
      selfUri: '/api/v2/users/568029a7-7d8f-4a24-b66f-0ff41b7bdadd'
    }
  },
  {
    id: '34024b11-2c97-4bdd-aa0f-2f8004aef0b9',
    name: 'Kayla Wallace WebRTC PHONE [994ea36]',
    lines: {
      id: '3779050f-a763-4a7e-9f2c-1fc3f1497394',
      name: '65e8ec9c42c0c7295524467d+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '32340b22-fa97-462e-bf81-d5921f012f0f',
      name: 'Kayla Wallace',
      selfUri: '/api/v2/users/32340b22-fa97-462e-bf81-d5921f012f0f'
    }
  },
  {
    id: 'c3a43c38-4f69-4540-b6ad-5b098bf6cc31',
    name: 'Kimberly Gordichuck WebRTC PHONE [af145af]',
    lines: {
      id: '95cf298c-f427-4910-9f4e-8cb32df3692c',
      name: '65e8fa31cb390f2cc0305824+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '09f8fb83-ec44-4b02-85ec-609315929869',
      name: 'Kimberly Gordichuck',
      selfUri: '/api/v2/users/09f8fb83-ec44-4b02-85ec-609315929869'
    }
  },
  {
    id: 'a451b632-14f5-4a29-bbc9-7153f86406e8',
    name: 'Lance Hall WebRTC PHONE [45faf49]',
    lines: {
      id: '46c4f622-6aae-47cf-9b67-652b63c945bc',
      name: '65e8da7a0f7e741bdaec4113+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: 'e8342c10-ecae-44df-938e-77889ad65576',
      name: 'Lance Hall',
      selfUri: '/api/v2/users/e8342c10-ecae-44df-938e-77889ad65576'
    }
  },
  {
    id: 'b8e9b6e5-587f-434c-9755-321ba075ae2e',
    name: 'Laurie Stossel WebRTC PHONE [46b1347]',
    lines: {
      id: '7a93fbe1-93a0-4308-aa6d-e6a2b967b232',
      name: '65e8e5c3436a1d2d4138cd89+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: 'a872421a-fbab-4098-8a22-f0ab19be2d1c',
      name: 'Laurie Stossel',
      selfUri: '/api/v2/users/a872421a-fbab-4098-8a22-f0ab19be2d1c'
    }
  },
  {
    id: 'be0bae3f-4f1f-4968-99b0-a185f14d3f6a',
    name: 'Mark Lau WebRTC PHONE [46b6182]',
    lines: {
      id: '9bac00e4-aa87-40b0-8094-6373bc1cb992',
      name: '65e8e5d1f7dc2f2da2ce7b8d+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '1470c297-5a0b-492d-926b-b392c678edcc',
      name: 'Mark Lau',
      selfUri: '/api/v2/users/1470c297-5a0b-492d-926b-b392c678edcc'
    }
  },
  {
    id: '0cbaf184-597e-411f-8289-084652a73e08',
    name: 'Megan Fedora WebRTC PHONE [05dfeaa]',
    lines: {
      id: '9f1306e0-1c69-4d45-9c02-6176b31b3c73',
      name: '65e8fa40f5a2311c208e9da8+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '0240797c-ad73-4e33-8a0d-0b85174c8682',
      name: 'Megan Fedora',
      selfUri: '/api/v2/users/0240797c-ad73-4e33-8a0d-0b85174c8682'
    }
  },
  {
    id: 'c0789b33-3cca-497f-8e2e-28f5f6070bc1',
    name: 'Melisa Barwick WebRTC PHONE [83bfdc5]',
    lines: {
      id: '96efef5c-dd49-4b48-9ec7-1269d0e62c59',
      name: '65e8e75bd9b3002dd64879f0+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '325ff527-df97-4c60-b011-05aae82a94be',
      name: 'Melisa Barwick',
      selfUri: '/api/v2/users/325ff527-df97-4c60-b011-05aae82a94be'
    }
  },
  {
    id: '20a70f40-5c5b-421b-bca4-7d86f9d1abfa',
    name: 'Neha Sharma WebRTC PHONE [e5c6d85]',
    lines: {
      id: 'dbc77cde-9e4c-4cfd-a7a6-15eaef30ea65',
      name: '65e8e64b062cc248f4820122+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: 'a8ba2cb1-ca16-4544-8471-b7f399958435',
      name: 'Neha Sharma',
      selfUri: '/api/v2/users/a8ba2cb1-ca16-4544-8471-b7f399958435'
    }
  },
  {
    id: 'e9086eca-96a5-4731-b7a4-5ccde38beebf',
    name: 'Peter Mancuso WebRTC PHONE [87383c5]',
    lines: {
      id: '872e5d64-6a67-4f36-b25d-21dc6be518d9',
      name: '65e8e4a483873d492922de2d+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: 'ad0b9af4-4c02-42cb-946d-f8d1fbe57238',
      name: 'Peter Mancuso',
      selfUri: '/api/v2/users/ad0b9af4-4c02-42cb-946d-f8d1fbe57238'
    }
  },
  {
    id: 'cfca1877-9008-45c0-87a5-68d7b255fa3d',
    name: 'Ritika Bhargava WebRTC PHONE [4ddf05c]',
    lines: {
      id: '2f341afb-d214-49f0-81f7-ef5109a90b43',
      name: '65e8e6e23da74c1c129c0723+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '7b75c6c1-0634-4b02-a90c-59e1e1df2b1a',
      name: 'Ritika Bhargava',
      selfUri: '/api/v2/users/7b75c6c1-0634-4b02-a90c-59e1e1df2b1a'
    }
  },
  {
    id: '42f9d437-6e14-49db-9171-c511b9d8cb1b',
    name: 'Runa Nandi WebRTC PHONE [2465a01]',
    lines: {
      id: '35538d21-62f1-4b9d-a921-632a831504c0',
      name: '65e8fb33e00b342e1b4c4079+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '933f587d-88ee-4f3a-9fbd-2b2f6fd2ddcb',
      name: 'Runa Nandi',
      selfUri: '/api/v2/users/933f587d-88ee-4f3a-9fbd-2b2f6fd2ddcb'
    }
  },
  {
    id: '7edb8dd4-522f-4ab6-ac5c-f59240b0f64b',
    name: 'Serena eke WebRTC PHONE [f30ea6a]',
    lines: {
      id: '84d07134-82e3-4021-bae2-645591c04a2b',
      name: '65e8e6c56d26452d52a03109+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '12068196-0d81-42df-ab59-644ccddc9013',
      name: 'Serena eke',
      selfUri: '/api/v2/users/12068196-0d81-42df-ab59-644ccddc9013'
    }
  },
  {
    id: 'f4a63267-36a1-4d7b-8580-94d7041dfed3',
    name: 'Sharon Merlino WebRTC PHONE [67c65f4]',
    lines: {
      id: '274d9cb9-b61a-4832-ac8f-5a3a077133e5',
      name: '65e8f95eee39291c23ba0ab6+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '1ee262e8-6e94-4b0a-9065-446485c566b0',
      name: 'Sharon Merlino',
      selfUri: '/api/v2/users/1ee262e8-6e94-4b0a-9065-446485c566b0'
    }
  },
  {
    id: '613bac9a-de62-4fa3-9b32-7231588a1e8c',
    name: 'Shiva Kohzad Mohamadi WebRTC PHONE [3251ff3]',
    lines: {
      id: 'b02ef1bf-45ed-42ee-a805-a75c0bd88ea0',
      name: '65e8e6516204a32d9290051b+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: 'aaafec2b-a6a2-4ffd-aea0-c1e70e8093b7',
      name: 'Shiva Kohzad Mohamadi',
      selfUri: '/api/v2/users/aaafec2b-a6a2-4ffd-aea0-c1e70e8093b7'
    }
  },
  {
    id: '25bfeee5-2b00-4ebc-9e2d-337558cfa111',
    name: 'Stacey Seney WebRTC PHONE [71d1b66]',
    lines: {
      id: 'f08b7d5b-658e-476c-8c3d-8342a7bb687d',
      name: '65e8ea42960d831beb0ef293+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '012e017b-67e8-49a2-9b94-0904957beaa2',
      name: 'Stacey Seney',
      selfUri: '/api/v2/users/012e017b-67e8-49a2-9b94-0904957beaa2'
    }
  },
  {
    id: '3e711e6b-49e6-4810-8f45-11fb3f0037ce',
    name: 'Sunny Pahooja WebRTC PHONE [520877d]',
    lines: {
      id: 'b58a7744-3a07-466a-a2d4-52f6e52d8b30',
      name: '65e8eb6f192c532a7a9f99c4+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '25fcbe6c-905b-49ea-86af-e1890ec3a3cc',
      name: 'Sunny Pahooja',
      selfUri: '/api/v2/users/25fcbe6c-905b-49ea-86af-e1890ec3a3cc'
    }
  },
  {
    id: 'ba915f2d-d6b9-4446-8595-12bd731e8fa9',
    name: 'Travis Stanley WebRTC PHONE [ce9516d]',
    lines: {
      id: '86239524-a0a1-4793-8a5c-3bc53729b11d',
      name: '65e8faaa547f882dd00a0e7f+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '85874444-7f8b-40b3-bd3e-c3636b579422',
      name: 'Travis Stanley',
      selfUri: '/api/v2/users/85874444-7f8b-40b3-bd3e-c3636b579422'
    }
  },
  {
    id: 'fdff922b-1c85-444a-a380-cf1cddf1a8ae',
    name: 'Victoria Hepburn WebRTC PHONE [82c7b6b]',
    lines: {
      id: '1b549fa9-a3c3-4fd3-9ad9-b363d93769d1',
      name: '65e8e2b3080fd91bd6063930+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '2ec89921-d2ce-4738-956e-f28f8296c66d',
      name: 'Victoria Hepburn',
      selfUri: '/api/v2/users/2ec89921-d2ce-4738-956e-f28f8296c66d'
    }
  },
  {
    id: 'd3eabea3-a0eb-4810-a764-dcd50d721f07',
    name: 'Yasmin Bellanger WebRTC PHONE [ed00989]',
    lines: {
      id: '1d2a5ebc-735a-4d28-be6f-bc89a807611f',
      name: '65e8e3f0b89eb92d246da58e+maximuscanada-sbc-internalcc.orgspan.com'
    },
    webRtcUser: {
      id: '70820482-8119-4221-8598-5d2f0a953d2a',
      name: 'Yasmin Bellanger',
      selfUri: '/api/v2/users/70820482-8119-4221-8598-5d2f0a953d2a'
    }
  }
];

let body = {
  name: "",
  site: {
    id: "0a994642-65cf-4cba-b98e-3e9976048ef3",
  },
  phoneBaseSettings: {
    id: "5f9c1e0d-cadb-4792-b982-9a3843ac0b9c",
  },
  lineBaseSettings: {
    id: "0a74cebd-093c-4679-97d0-c8a71acfa842",
    name: "WebRTC Base Settings_1",
  },
  phoneMetaBase: {
    id: "inin_webrtc_softphone.json",
    name: "PureCloud WebRTC Phone",
  },
  lines: [
    {
      id: "",
      name: "",
      state: "active",
      site: {
        id: "0a994642-65cf-4cba-b98e-3e9976048ef3",
      },
      lineBaseSettings: {
        id: "0a74cebd-093c-4679-97d0-c8a71acfa842",
        name: "WebRTC Base Settings_1",
      },
    },
  ],
  webRtcUser: {
    id: "",
    name: "",
  },
};

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    let promises = phoneIdArr.map((phone) => {
      body.name = phone.name;
      body.webRtcUser.id = phone.webRtcUser.id;
      body.webRtcUser.name = phone.webRtcUser.name;
      body.lines[0].id = phone.lines.id;
      body.lines[0].name = phone.lines.name;
      // console.log(phone.id)
      // console.log(body);
      return telephonyApi.putTelephonyProvidersEdgesPhone(phone.id, body);
    });

    return Promise.all(promises).then(() => {
      console.log("Success! WebRtcPhones have been modified.");
      console.log(promises);
    });
  })
  .catch((err) => {
    console.log("There was a failure calling putTelephonyProvidersEdgesPhone");
    console.error(err);
  });
