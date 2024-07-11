import dotenv from "dotenv";
import platformClient from "purecloud-platform-client-v2";
dotenv.config();

const region = process.env.REGION; //https://developer.genesys.cloud/platform/api/

const client = platformClient.ApiClient.instance;
client.setEnvironment(region);

const orgOauth = {
  SBC: {
    clientId: process.env.CLIENT_ID_SBC,
    clientSecret: process.env.CLIENT_SECRET_SBC,
  },
  SBCICC: {
    clientId: process.env.CLIENT_ID_SBCICC,
    clientSecret: process.env.CLIENT_SECRET_SBCICC,
  },
  ODB: {
    clientId: process.env.CLIENT_ID_ODB,
    clientSecret: process.env.CLIENT_SECRET_ODB,
  },
  DEV: {
    clientId: process.env.CLIENT_ID_DEV,
    clientSecret: process.env.CLIENT_SECRET_DEV
  },
  FEC: {
    clientId: process.env.CLIENT_ID_FEC,
    clientSecret: process.env.CLIENT_SECRET_FEC
  }
};

export { platformClient, client, orgOauth };
