const axios =require("axios");
const { createAuthorizationHeader } =require( "./cryptic.js");
const {isoTimestamp} =require('./unique.js')
const dotenv =require( "dotenv");
dotenv.config();

const makeSearchRequest = async () => {

    const requestPayload ={
        "context": {
          "domain": "ONDC:RET12",
          "action": "search",
          "country": "IND",
          "city": "std:80",
          "core_version": "1.2.0",
          "bap_id": "ondc.eatiko.com",
          "bap_uri":"https://ondc.eatiko.com/PREPROD",
          "transaction_id": "137aa25b-92e6-40a5-ae45-0be8de13415cd",
          "message_id": "23b06f1a-72e2-45b6-aaf7-cfc73c1a9c167",
          "timestamp": isoTimestamp,
          "ttl": "PT30S"
        },
        "message": {
          "intent": {
            "payment": {
              "@ondc/org/buyer_app_finder_fee_type": "percent",
              "@ondc/org/buyer_app_finder_fee_amount": "3"
            },
            "tags": [
              {
                "code": "catalog_inc",
                "list": [{ "code": "mode", "value": "start" }]
              }
            ]
          }
        }
      }
 
    const authorizationHeader = await createAuthorizationHeader(requestPayload);
    const response = await axios.post(`https://preprod.gateway.ondc.org/search`,requestPayload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationHeader,
        "X-Gateway-Authorization": authorizationHeader,
      },
    });
  
  
};

makeSearchRequest();