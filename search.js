const axios =require("axios");
const{ createAuthorizationHeader } =require("./cryptic.js");
const {isoTimestamp} =require('./unique.js')
const dotenv= require("dotenv");
dotenv.config();
const makeSearchRequest = async () => {
 const requestPayload={
    "context": {
      "domain": "ONDC:RET11",
      "action": "search",
      "country": "IND",
      "city": "std:080",
      "core_version": "1.2.0",
      "bap_id": "ondc.eatiko.com",
      "bap_uri": "https://ondc.eatiko.com/PREPROD",
      "transaction_id": "7785b5fb-c937-4ec3-90c9-c27c9c49908f",
      "message_id": "843e0c9f-2ef2-49ff-bb54-0d82c31cd957",
      "timestamp":isoTimestamp,
      "ttl": "PT30S"
    },
    "message": {
      "intent": {
        "fulfillment": { "type": "Delivery" },
        "payment": {
          "@ondc/org/buyer_app_finder_fee_type": "percent",
          "@ondc/org/buyer_app_finder_fee_amount": "3"
        }
      }
    }
  }
    const authorizationHeader = await createAuthorizationHeader(requestPayload);
    const response = await axios.post(`https://preprod.gateway.ondc.org/search`, requestPayload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationHeader,
        "X-Gateway-Authorization": authorizationHeader,
      },
    });
  
  
};
makeSearchRequest();