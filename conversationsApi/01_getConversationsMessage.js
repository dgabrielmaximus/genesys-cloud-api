import { platformClient, client, orgOauth } from "../config.js";

// Choose the organization: DEV, SBC, SBCICC, SDO, ODB
const { clientId, clientSecret } = orgOauth.FEC;

const conversationApi = new platformClient.ConversationsApi();

const conversationId = "d35ce7c1-26e5-41e9-9bc2-c9bb359399ac";

client
  .loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    return conversationApi.getConversationsMessage(conversationId);
  })
  .then((data) => {
    let customerData = data.participants.find(message => message.purpose === "customer");
    // console.log(customerData.attributes["SurveyResults"]);
    let customerDataArray = customerData.attributes["SurveyResults"].split("|")
    let surveyArray = []
    surveyArray.push(customerDataArray[7])
    surveyArray.push(customerDataArray[8])
    surveyArray.push(customerDataArray[9])
    surveyArray.push(customerDataArray[10])
    console.log(surveyArray)
    return surveyArray;
  })
  .catch((err) => {
    console.log("There was a failure calling getConversationsMessage");
    console.error(err);
  });
