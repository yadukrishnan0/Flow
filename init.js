const axios =require("axios");
const  { createAuthorizationHeader } =require("./cryptic.js");
const {isoTimestamp} =require('./unique.js')
const dotenv =require( "dotenv");
dotenv.config();

const makeInitRequest = async () => {
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
            "provider": { "id": "slrp-1355789", "locations": [{ "id": "HOMEB-1000" }] },
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
          "billing": {
            "address": {
              "building": "near Aacharya Shanti Sagar Chawk",
              "city": "Pune",
              "state": "Maharashtra",
              "country": "IND",
              "area_code": "411014",
              "locality": "Unnamed Road",
              "name": "Pankaj Dhote"
            },
            "phone": "9579269452",
            "name": "Pankaj Dhote",
            "email": "pankaj.dhote@desteksolutions.com",
            "created_at": "2024-07-01T07:23:33.238Z",
            "updated_at": "2024-07-01T07:23:33.238Z"
          },
          "fulfillments": [
            {
              "id": "4d1a9859-18d3-4e8f-b8a4-4616a0c2587f",
              "type": "Delivery",
              "end": {
                "contact": {
                  "email": "pankaj.dhote@desteksolutions.com",
                  "phone": "9579269452"
                },
                "location": {
                  "gps": "18.567463157396705,73.92617583274843",
                  "address": {
                    "building": "near Aacharya Shanti Sagar Chawk",
                    "city": "Pune",
                    "state": "Maharashtra",
                    "country": "IND",
                    "area_code": "411014",
                    "locality": "Unnamed Road",
                    "name": "Pankaj Dhote"
                  }
                }
              }
            }
          ]
        }
      }}
   
  

    const authorizationHeader = await createAuthorizationHeader(requestPayload);
    const response = await axios.post(`https://ondcpreprod.sellerapp.in/bpp/u/init`, requestPayload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationHeader,
        "X-Gateway-Authorization": authorizationHeader,
      },
    });

    if(response){
      console.log(response)
    }

  }
  
  

makeInitRequest();