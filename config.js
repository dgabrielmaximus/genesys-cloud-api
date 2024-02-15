import dotenv from "dotenv";
import platformClient from "purecloud-platform-client-v2";
dotenv.config();
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const region = process.env.REGION; //https://developer.genesys.cloud/platform/api/

const client = platformClient.ApiClient.instance;
client.setEnvironment(region);

export { platformClient, client, clientId, clientSecret };
