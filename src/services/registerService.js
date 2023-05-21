import React from "react";
import axios from "axios";
export const RegisterService = async ( email, password, username ) => {
  
  const url = process.env.NEXT_PUBLIC_REGISTER_API;

  const data = `username=${username}&password=${password}&email=${email}`
  
  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: data,
    url,
  };
  const result = await axios(options)
  return result;
};
