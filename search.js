const axios =require("axios");
import { createAuthorizationHeader } from "./cryptic.js";
import dotenv from "dotenv";
dotenv.config();
const makeSearchRequest = async () => {
 
    const authorizationHeader = await createAuthorizationHeader(requestPayload);
    const response = await axios.post(``, requestPayload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationHeader,
        "X-Gateway-Authorization": authorizationHeader,
      },
    });
  
  
};
makeSearchRequest();