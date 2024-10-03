const axios =require("axios");
const  { createAuthorizationHeader } =require("./cryptic.js");
const {isoTimestamp} =require('./unique.js')
const dotenv =require( "dotenv");
dotenv.config();

const makeSelectRequest = async () => {
  const requestPayload= {
      "context": {
        "domain": "ONDC:RET10",
        "country": "IND",
        "city": "std:080",
        "action": "select",
        "core_version": "1.2.0",
       "bap_id": "ondc.eatiko.com",
        "bap_uri": "https://ondc.eatiko.com/PREPROD",
        "bpp_uri": "https://ondcpreprod.sellerapp.in/bpp/u",
       "transaction_id": "7785b5fb-c937-4ec3-90c9-c27c9c49908f",
        "message_id": "c336d922-4da7-40ed-b150-1d7e380c2ada",
        "timestamp": new Date(),
        "bpp_id": "ondcpreprod.sellerapp.in",
        "ttl": "PT30S"
      },
      "message": {
        "order": {
          "items": [
            {
              "id": "5b9566b3305b1db6",
              "quantity": { "count": 2 },
              "location_id": "HOMEB-1000",
              "tags": [
                { "code": "type", "list": [{ "code": "type", "value": "item" }] }
              ],
              "parent_item_id": "3f81a2c18a60c01d"
            },{
              "id": "956516ddb6cd9f76",
              "quantity": { "count": 2 },
              "location_id": "HOMEB-1000",
              "tags": [
                { "code": "type", "list": [{ "code": "type", "value": "item" }] }
              ],
              "parent_item_id": "ed93c274f80abc1e"
            },{
              "id": "5becc426de956eb2",
              "quantity": { "count": 2 },
              "location_id": "HOMEB-1000",
              "tags": [
                { "code": "type", "list": [{ "code": "type", "value": "item" }] }
              ],
              "parent_item_id": "528b078402a019ee"
            },{
              "id": "790f501939d91868",
              "quantity": { "count": 2 },
              "location_id": "HOMEB-1000",
              "tags": [
                { "code": "type", "list": [{ "code": "type", "value": "item" }] }
              ],
              
            },
           
        
          ],
          "provider": { "id": "slrp-1355789", "locations": [{ "id": "HOMEB-1000" }] },
          "fulfillments": [
            {
              "end": {
                "location": {
                  "gps": "12.970557,77.6448023",
                  "address": { "area_code": "560038" }
                }
              }
            }
          ]
        }
      }}
   
  

    const authorizationHeader = await createAuthorizationHeader(requestPayload);
    const response = await axios.post(`https://ondcpreprod.sellerapp.in/bpp/u/select`, requestPayload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationHeader,
        "X-Gateway-Authorization": authorizationHeader,
      },
    });

    if(response){
      console.log(response.message)
    }

  }
  
  

makeSelectRequest();