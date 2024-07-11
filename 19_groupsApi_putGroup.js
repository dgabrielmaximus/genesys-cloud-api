import { platformClient, client, orgOauth } from "./config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.SBCICC;

const groupsApi = new platformClient.GroupsApi();

let bodyArr = [
  {
    id: "3b641416-2bea-4111-a2f2-c9d0d0f49237",
    name: "[Admin] ALL PERMISSIONS",
    state: "active",
    version: 44,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "659bfe2c6b1e141b9558d38e@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "db7b7410-4748-409c-89fa-7c8cd9755cc5",
      "0076f81a-eef4-4a9e-876a-815ed45bfb9f",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "d16ede55-1a73-459a-9cff-2ad785777351",
    name: "[DEV] Testing",
    state: "active",
    version: 27,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "659c08e07f50231b5cae831f@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "db7b7410-4748-409c-89fa-7c8cd9755cc5",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "4575a2f7-5583-43c6-9c49-8939b992161d",
    name: "All - Gen - SBC ICC",
    state: "active",
    version: 16,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65ccfdb3ac727a1c77b51317@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "0076f81a-eef4-4a9e-876a-815ed45bfb9f",
      "467107cf-440f-41e7-9a61-45a98a2611ce",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "3bba6250-2094-4cd4-afd5-a4fd4116c060",
      "db7b7410-4748-409c-89fa-7c8cd9755cc5",
      "36d28a99-3562-45b0-82ca-3389395383e0",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "02a03201-f59f-464e-955b-72d7f8965d6d",
    name: "ATTENDANCE LINE BCOL",
    state: "active",
    version: 12,
    type: "official",
    addresses: [
      {
        address: "+17785979020",
        display: "+1 778-597-9020",
        type: "GROUPRING",
        mediaType: "PHONE",
      },
    ],
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65b7e9f1b45f171b5b203c09@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "99200e1e-122f-40dd-bdc1-4a1e6e3bd0bc",
      "27d446c9-75cc-417a-a9ec-410c9fe3aebc",
      "3c59563b-610f-4cd0-a925-2d8c62f0c210",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "2de4b922-7e60-4ee8-888c-3a3327d5b40d",
    name: "ATTENDANCE LINE BCROS",
    state: "active",
    version: 19,
    type: "official",
    addresses: [
      {
        address: "+17785979022",
        display: "+1 778-597-9022",
        type: "GROUPRING",
        mediaType: "PHONE",
      },
    ],
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65c2745673756e1c220de25f@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "0fa29cc4-90f3-464c-a270-fd9238ac26f3",
      "645ff4ea-ea02-40ed-843f-9eb8d006d117",
      "09f8fb83-ec44-4b02-85ec-609315929869",
      "0240797c-ad73-4e33-8a0d-0b85174c8682",
      "fec06724-3cdb-46f4-9aa5-d576fcc22bdb",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "33c80c12-d060-4316-8ae3-55b50c6c6199",
    name: "ATTENDANCE LINE IDIM",
    state: "active",
    version: 27,
    type: "official",
    addresses: [
      {
        address: "+17785979021",
        display: "+1 778-597-9021",
        type: "GROUPRING",
        mediaType: "PHONE",
      },
    ],
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65b7e347b45f171b5e3b5f81@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "cf9ec4a0-f1fb-48c6-bd66-216a38a9c50c",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "48f96e7d-82c1-4aa4-bbcf-111d57ecc764",
    name: "BCROS UAT Testers",
    state: "active",
    version: 3,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65de440f440adb1c1afe9e76@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "bcc6492f-0e43-4057-81b3-e426a23b2cf3",
    name: "Dashboard Admins",
    state: "active",
    version: 14,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65c2a0ef4e1f011c9cef113f@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "33ef2f78-fefd-4658-bc53-9d866b2e4b9a",
    name: "Gen - SBC BCOL - Agents",
    state: "active",
    version: 7,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d8db4f080fd91bd6038418@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "fcd86a08-7141-46f8-93f3-e83bd7d91f16",
    name: "Gen - SBC BCOL - Supervisors",
    state: "active",
    version: 13,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d8db58aed9d71be43b63d1@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "99200e1e-122f-40dd-bdc1-4a1e6e3bd0bc",
      "27d446c9-75cc-417a-a9ec-410c9fe3aebc",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "6ffd1160-370d-4152-a552-1d5e41bca095",
    name: "Gen - SBC BCOL - Trainers",
    state: "active",
    version: 6,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65fb02026dbd7e09f4a6d00c@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "99200e1e-122f-40dd-bdc1-4a1e6e3bd0bc",
      "27d446c9-75cc-417a-a9ec-410c9fe3aebc",
      "45b4e20c-80c2-4821-86a7-9e1c966735c6",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "aaaaea79-e591-40df-997d-90f06b05c821",
    name: "Gen - SBC BCROS - Agents",
    state: "active",
    version: 28,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d67c374dff071c05ef5e7d@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "3bba6250-2094-4cd4-afd5-a4fd4116c060",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "35e00c8b-7f1b-44c3-ba09-0332c589ea2d",
    name: "Gen - SBC BCROS - Supervisors",
    state: "active",
    version: 34,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d683b002a6c11c364274fd@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "0240797c-ad73-4e33-8a0d-0b85174c8682",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "131eb60e-0a5e-4812-b2e0-f3420149c4a7",
    name: "Gen - SBC BCROS - Trainers",
    state: "active",
    version: 5,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65fb01cb3a46bb147911ba7f@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "4f24b9bf-eaa8-4d69-940a-beecc57c4755",
    name: "Gen - SBC ICC - Admins",
    state: "active",
    version: 4,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "6604738ce51efe1becb21d8a@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "0076f81a-eef4-4a9e-876a-815ed45bfb9f",
      "467107cf-440f-41e7-9a61-45a98a2611ce",
      "3bba6250-2094-4cd4-afd5-a4fd4116c060",
      "0ba9ae68-8e43-4cca-9829-8e76c498904b",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "b128790d-86bb-47cd-b926-9419271704dd",
    name: "Gen - SBC ICC - PM",
    state: "active",
    version: 4,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65fb020e83873d1064b092f7@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: ["ebdc2eb8-25a4-469e-adb0-a0bfd318aede"],
  },
  {
    id: "6cc49f40-4b8f-4f1f-a6c1-153d72e44570",
    name: "Gen - SBC IDIM - Agents",
    state: "active",
    version: 8,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d8db32ee13b21c16fad1cc@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "9c18333a-1243-4d49-bc82-19a1d6498464",
    name: "Gen - SBC IDIM - Supervisors",
    state: "active",
    version: 8,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d8db39406b7a2e0147fe4e@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: ["ebdc2eb8-25a4-469e-adb0-a0bfd318aede"],
  },
  {
    id: "0479c196-f86b-4d5f-a652-9af394b862b7",
    name: "Gen - SBC IDIM - Trainers",
    state: "active",
    version: 3,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65fb01ef3a46bb147911ba82@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "e1e71104-6996-4c85-9e38-89f466e0d736",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "795f3c03-2945-4c7f-8417-0328441a0790",
    name: "genesys.sbc.poc",
    state: "active",
    version: 5,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65a83415f339de1b5f391ecd@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "0ba9ae68-8e43-4cca-9829-8e76c498904b",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "eea30e13-2a7f-4ccb-bb20-cac7d99287f1",
    name: "SBC_BCOL_EMAIL_UAT",
    state: "active",
    version: 3,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65e8b02ace867f1c1b342b79@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "99200e1e-122f-40dd-bdc1-4a1e6e3bd0bc",
      "27d446c9-75cc-417a-a9ec-410c9fe3aebc",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "652d0e35-4a4e-452a-b5c4-1f38da8626ed",
    name: "SBC_BCOL_GE_PROD",
    state: "active",
    version: 10,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65c27e9e8547071baf6a0c75@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "99200e1e-122f-40dd-bdc1-4a1e6e3bd0bc",
      "27d446c9-75cc-417a-a9ec-410c9fe3aebc",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "257a8437-b5bd-440a-a582-8e473b44b333",
    name: "SBC_BCOL_GE_UAT",
    state: "active",
    version: 14,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65aff5e2a73cd21b93f1ed9d@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    rolesEnabled: true,
    ownerIds: [
      "27d446c9-75cc-417a-a9ec-410c9fe3aebc",
      "99200e1e-122f-40dd-bdc1-4a1e6e3bd0bc",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "86a0cdb2-bbd4-422b-b993-764228b886a6",
    name: "SBC_BCOL_RMS_PROD",
    state: "active",
    version: 6,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65c27f6a73756e1c220dfbc6@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "99200e1e-122f-40dd-bdc1-4a1e6e3bd0bc",
      "27d446c9-75cc-417a-a9ec-410c9fe3aebc",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "67306862-7d96-4125-b4c8-af89da6ec0a3",
    name: "SBC_BCOL_RMS_UAT",
    state: "active",
    version: 7,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65aff65f38ebd31b60332bb0@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "99200e1e-122f-40dd-bdc1-4a1e6e3bd0bc",
      "27d446c9-75cc-417a-a9ec-410c9fe3aebc",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "764cf86a-fbf8-4def-b2ad-8cde16566105",
    name: "SBC_BCOL_SMS_PROD",
    state: "active",
    version: 5,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65c27e6873756e1c237fe7f2@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "99200e1e-122f-40dd-bdc1-4a1e6e3bd0bc",
      "27d446c9-75cc-417a-a9ec-410c9fe3aebc",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "e726cf97-498b-43a1-a881-1771cd5c6a0f",
    name: "SBC_BCROS_CORPORATIONS_PROD",
    state: "active",
    version: 1,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d6374e79fe651bd9487bf2@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: ["ebdc2eb8-25a4-469e-adb0-a0bfd318aede"],
  },
  {
    id: "b9d269a8-685b-44d5-baba-3bb3eb166d85",
    name: "SBC_BCROS_CORPORATIONS_UAT",
    state: "active",
    version: 8,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d6373fa424371bf20e0e2b@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "a69b7ce7-02c7-460d-935c-59e0d09f5803",
    name: "SBC_BCROS_MHR_PPR_PROD",
    state: "active",
    version: 1,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d637736ccce41be6c87f19@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: ["ebdc2eb8-25a4-469e-adb0-a0bfd318aede"],
  },
  {
    id: "b7ae6901-3e26-47a1-8353-ea70346f550f",
    name: "SBC_BCROS_MHR_PPR_UAT",
    state: "active",
    version: 7,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d637590929851bd9665095@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "c87dee59-5f95-4f0e-aad8-6154dabe3a71",
    name: "SBC_BCROS_NAMES_PROD",
    state: "active",
    version: 1,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d63780bca20b1c1eb8e52a@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: ["ebdc2eb8-25a4-469e-adb0-a0bfd318aede"],
  },
  {
    id: "a06a3f18-28c9-464c-8f40-d8f0f57fa605",
    name: "SBC_BCROS_NAMES_UAT",
    state: "active",
    version: 9,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d6377c29ed341c327176af@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "61691c4a-49cd-4017-a3bf-76d1a598a3f5",
    name: "SBC_BCROS_PARTNERSHIPS_PROD",
    state: "active",
    version: 1,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d6378ee092be1be5f5c15f@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: ["ebdc2eb8-25a4-469e-adb0-a0bfd318aede"],
  },
  {
    id: "085eed6d-6128-46b4-8051-660e529a3243",
    name: "SBC_BCROS_PARTNERSHIPS_UAT",
    state: "active",
    version: 7,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d637893b75561bf115db34@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "733c7042-52d0-42a0-9e95-b0c05b1f5f71",
    name: "SBC_BCROS_SEARCH_PROD",
    state: "active",
    version: 1,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d637a7b89eb91c0c1957d5@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: ["ebdc2eb8-25a4-469e-adb0-a0bfd318aede"],
  },
  {
    id: "7f70b5f0-e39c-493e-9a3e-ba07143845c6",
    name: "SBC_BCROS_SEARCH_UAT",
    state: "active",
    version: 7,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d637a13172241c19541a6f@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "438ff311-31b5-457e-bfba-6072c6bb902d",
    name: "SBC_BCROS_SMS_PROD",
    state: "active",
    version: 1,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d637bf4f94f91c04d7c5bb@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: ["ebdc2eb8-25a4-469e-adb0-a0bfd318aede"],
  },
  {
    id: "8976445b-720d-4b60-b0c0-07fa05a06347",
    name: "SBC_BCROS_SMS_UAT",
    state: "active",
    version: 4,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d637b2e092be1be5f5c164@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "ae63e20e-2b43-42f2-87e2-4d780b258938",
    name: "SBC_BCROS_SOCIETIES_PROD",
    state: "active",
    version: 1,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d637cebdb83c1be32bd45d@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: ["ebdc2eb8-25a4-469e-adb0-a0bfd318aede"],
  },
  {
    id: "a00eb792-f322-44ce-84c8-3aa9515001a9",
    name: "SBC_BCROS_SOCIETIES_UAT",
    state: "active",
    version: 4,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65d637c97fb19e1bd6aeaf1b@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "2f13ce88-90bd-4aad-87f3-fcfa35c50fb7",
    name: "SBC_IDIM_BCeID_PROD",
    state: "active",
    version: 8,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65dcc085dc4f422de5e6baa4@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "e1e71104-6996-4c85-9e38-89f466e0d736",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "213c1317-d15f-4a76-90a1-a46e4e1f1d20",
    name: "SBC_IDIM_BCeID_UAT",
    state: "active",
    version: 10,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65aff7a5a73cd21b93f1f33e@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "e1e71104-6996-4c85-9e38-89f466e0d736",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "c8ade85f-8c64-4204-b3ec-e34ac23cb500",
    name: "SBC_IDIM_BCSC_PROD",
    state: "active",
    version: 4,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65dcc079a4986c1c5bb7feb3@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: ["ebdc2eb8-25a4-469e-adb0-a0bfd318aede"],
  },
  {
    id: "c9cb8650-21a7-462d-beb1-b38248237db8",
    name: "SBC_IDIM_BCSC_UAT",
    state: "active",
    version: 16,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65aff7d538ebd31b603331a7@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "e1e71104-6996-4c85-9e38-89f466e0d736",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "bb0db5f0-6bc1-4c8c-817b-13640856e212",
    name: "Test",
    state: "active",
    version: 1,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65de4f677015342dd0ed1d8c@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: ["ebdc2eb8-25a4-469e-adb0-a0bfd318aede"],
  },
  {
    id: "181f1191-334a-427f-8147-8c5cc8c3da0e",
    name: "TRN_GROUP_1 - BCOL",
    state: "active",
    version: 11,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65b95d0c9de8091b9a2998f1@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "5f802d5b-4b98-48e3-ac91-ab96ecf31759",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "837a66c3-9e41-48bd-b073-fd365f9d4920",
    name: "TRN_GROUP_2 - BCOL",
    state: "active",
    version: 11,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65b95d149de8091b9a299902@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "5f802d5b-4b98-48e3-ac91-ab96ecf31759",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "85802471-4fbe-4d52-bc80-14b68c2d7e74",
    name: "TRN_GROUP_3 - BCROS",
    state: "active",
    version: 16,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65b95d199de8091b9dffa245@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "5f802d5b-4b98-48e3-ac91-ab96ecf31759",
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "fec06724-3cdb-46f4-9aa5-d576fcc22bdb",
      "c9ec5974-e705-4027-9337-cd2fb88aac3f",
      "43260fe1-0811-4efc-a82f-9cb051943d82",
      "0967e172-972e-4c7c-ac57-0539ad0d157d",
      "00040b6c-4423-4627-a746-9d6ec3236a78",
      "a8ba2cb1-ca16-4544-8471-b7f399958435",
      "0fa29cc4-90f3-464c-a270-fd9238ac26f3",
      "645ff4ea-ea02-40ed-843f-9eb8d006d117",
      "325ff527-df97-4c60-b011-05aae82a94be",
      "85874444-7f8b-40b3-bd3e-c3636b579422",
      "a872421a-fbab-4098-8a22-f0ab19be2d1c",
      "933f587d-88ee-4f3a-9fbd-2b2f6fd2ddcb",
      "e7eb44b1-bd8a-460d-98b5-acd0d5bb1756",
      "e8342c10-ecae-44df-938e-77889ad65576",
      "3bec1ed5-b5c6-4ccb-b135-02cf49de3f7e",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "ca0eceb0-91d0-487c-b9f6-fa1fdb416233",
    name: "TRN_GROUP_4 - BCROS",
    state: "active",
    version: 10,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65b95d1d9de8091b9cd723e9@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "5f802d5b-4b98-48e3-ac91-ab96ecf31759",
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "fec06724-3cdb-46f4-9aa5-d576fcc22bdb",
      "c9ec5974-e705-4027-9337-cd2fb88aac3f",
      "43260fe1-0811-4efc-a82f-9cb051943d82",
      "0967e172-972e-4c7c-ac57-0539ad0d157d",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "ef1dad30-7639-4f67-9613-1815906e8570",
    name: "TRN_GROUP_5 - BCROS",
    state: "active",
    version: 6,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65b95d2228acd41bcaa0d673@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "5f802d5b-4b98-48e3-ac91-ab96ecf31759",
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "fec06724-3cdb-46f4-9aa5-d576fcc22bdb",
      "c9ec5974-e705-4027-9337-cd2fb88aac3f",
      "43260fe1-0811-4efc-a82f-9cb051943d82",
      "0967e172-972e-4c7c-ac57-0539ad0d157d",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "92c4dbbb-e3ae-4605-9cff-699dd60d2590",
    name: "TRN_GROUP_6 - BCROS",
    state: "active",
    version: 10,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65b95d266b70091b8cd01846@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "5f802d5b-4b98-48e3-ac91-ab96ecf31759",
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "fec06724-3cdb-46f4-9aa5-d576fcc22bdb",
      "c9ec5974-e705-4027-9337-cd2fb88aac3f",
      "43260fe1-0811-4efc-a82f-9cb051943d82",
      "0967e172-972e-4c7c-ac57-0539ad0d157d",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "fca011e7-a662-4190-ae47-9cd22e149f9d",
    name: "TRN_GROUP_7 - BCROS",
    state: "active",
    version: 5,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65b95d3157b89b1b97cc0e4d@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "8e168514-90f1-4b37-8cc6-69fa41dcea73",
      "fec06724-3cdb-46f4-9aa5-d576fcc22bdb",
      "c9ec5974-e705-4027-9337-cd2fb88aac3f",
      "43260fe1-0811-4efc-a82f-9cb051943d82",
      "0967e172-972e-4c7c-ac57-0539ad0d157d",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "16007743-40b6-4683-a209-febb8c94cf06",
    name: "TRN_GROUP_8 - IDIM",
    state: "active",
    version: 9,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65b95d2d28acd41bcbb6d071@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "5f802d5b-4b98-48e3-ac91-ab96ecf31759",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
  {
    id: "c63466a9-3186-4dcc-8bd8-09bf337b54f5",
    name: "TRN_GROUP_9 - IDIM",
    state: "active",
    version: 12,
    type: "official",
    rulesVisible: true,
    visibility: "members",
    chat: {
      jabberId:
        "65b95d2957b89b1b953070b7@conference.maximuscanada-sbc-internalcc.orgspan.com",
    },
    ownerIds: [
      "5f802d5b-4b98-48e3-ac91-ab96ecf31759",
      "ebdc2eb8-25a4-469e-adb0-a0bfd318aede",
    ],
  },
];

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    let promises = bodyArr.map((body) => {
      return groupsApi.putGroup(body.id, {body});
    });

    return Promise.all(promises).then(() => {
      console.log("Success! Groups have been modified.");
      console.log(promises);
    });
  })
  .catch((err) => {
    console.log("There was a failure authenticating the client.");
    console.error(err);
  });
