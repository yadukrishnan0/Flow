const axios =require("axios");
const  { createAuthorizationHeader } =require("./cryptic.js");
const {isoTimestamp} =require('./unique.js')
const dotenv =require( "dotenv");
dotenv.config();

const makeConfirmRequest = async () => {
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
      "id": "2024-10-03-299756",
      "state": "Created",
      "billing": {
        "address": {
          "name": "Pankaj Dhote",
          "building": "near Aacharya Shanti Sagar Chawk",
          "locality": "Unnamed Road",
          "city": "Pune",
          "state": "Maharashtra",
          "country": "IND",
          "area_code": "411014"
        },
        "phone": "9579269452",
        "name": "Pankaj Dhote",
        "email": "pankaj.dhote@desteksolutions.com",
        "created_at": "2024-07-01T07:23:33.238Z",
        "updated_at": "2024-07-01T07:23:33.238Z"
      },
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
      "provider": { "id": "slrp-1355789", "locations": [{ "id": "HOMEB-1000" }]},
      "fulfillments": [
        {
          "@ondc/org/TAT": "PT90M",
          "id": "WD111",
          "tracking": true,
          "end": {
            "contact": {
              "email": "pankaj.dhote@desteksolutions.com",
              "phone": "9579269452"
            },
            "person": { "name": "Pankaj Dhote" },
            "location": {
              "gps": "12.970557,77.6448023",
              "address": {
                "name": "Pankaj Dhote",
                "building": "near Aacharya Shanti Sagar Chawk",
                "locality": "Unnamed Road",
                "city": "Pune",
                "state": "Maharashtra",
                "country": "IND",
                "area_code": "411014"
              }
            }
          },
          "type": "Delivery"
        }
      ],
      "payment": {
        "uri": "https://razorpay.com/",
        "tl_method": "http/get",
        "params": {
          "amount": "2462.40",
          "currency": "INR",
          "transaction_id": "order_OTHgNuQrTwOls9"
        },
        "status": "PAID",
        "type": "ON-ORDER",
        "collected_by": "BAP",
        "@ondc/org/buyer_app_finder_fee_type": "percent",
        "@ondc/org/buyer_app_finder_fee_amount": "3.0",
        "@ondc/org/settlement_details": [
          {
            "settlement_counterparty": "seller-app",
            "settlement_phase": "sale-amount",
            "settlement_type": "neft",
            "beneficiary_name": "Destek Infosolutions Pvt Ltd",
            "settlement_bank_account_no": "115022700000022",
            "settlement_ifsc_code": "YESB0000001",
            "bank_name": "ICICI Bank",
            "branch_name": "Viman Nagar, Pune"
          }
        ]
      },
      "quote": {
        "breakup": [
          {
            "title": "Homemade Love Khatta Meetha Lemon Pickle -250g",
            "price": {
              "currency": "INR",
              "value": "598"
            },
            "@ondc/org/item_id": "5b9566b3305b1db6",
            "@ondc/org/item_quantity": {
              "count": 2
            },
            "@ondc/org/title_type": "item",
            "item": {
              "price": {
                "currency": "INR",
                "value": "299"
              }
            }
          },
          {
            "title": "Homemade Love-  Garlic Pickle - 250g",
            "price": {
              "currency": "INR",
              "value": "598"
            },
            "@ondc/org/item_id": "956516ddb6cd9f76",
            "@ondc/org/item_quantity": {
              "count": 2
            },
            "@ondc/org/title_type": "item",
            "item": {
              "price": {
                "currency": "INR",
                "value": "299"
              }
            }
          },
          {
            "title": "Homemade Love- Punjabi Aam ka Achaar - 250g",
            "price": {
              "currency": "INR",
              "value": "598"
            },
            "@ondc/org/item_id": "5becc426de956eb2",
            "@ondc/org/item_quantity": {
              "count": 2
            },
            "@ondc/org/title_type": "item",
            "item": {
              "price": {
                "currency": "INR",
                "value": "299"
              }
            }
          },
          {
            "title": "Homemade Love-  Green Chilli pickle -200g",
            "price": {
              "currency": "INR",
              "value": "598"
            },
            "@ondc/org/item_id": "790f501939d91868",
            "@ondc/org/item_quantity": {
              "count": 2
            },
            "@ondc/org/title_type": "item",
            "item": {
              "price": {
                "currency": "INR",
                "value": "299"
              }
            }
          },
          {
            "title": "Delivery charges",
            "price": {
              "currency": "INR",
              "value": "70"
            },
            "@ondc/org/item_id": "4d1a9859-18d3-4e8f-b8a4-4616a0c2587f",
            "@ondc/org/title_type": "delivery"
          }
        ],
        "price": { "currency": "INR", "value": "2462.40" },
        "ttl": "P1D"
      },
      "tags": [
        {
          "code": "bpp_terms",
          "list": [
            {
              "code": "tax_number",
              "value": "29ABDCS3411L1Z7"
            },
            {
              "code": "provider_tax_number",
              "value": "2w354df6g"
            }
          ]
        }
      ],

      "created_at": new Date(),
      "updated_at": new Date()
    }
  }}
   
  

    const authorizationHeader = await createAuthorizationHeader(requestPayload);
    const response = await axios.post(`https://ondcpreprod.sellerapp.in/bpp/u/confirm`, requestPayload, {
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
  
  

makeConfirmRequest();