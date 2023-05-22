import React from "react";
import axios from "axios";
export const RegisterService = async ( email, password, username ) => {
  
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/register`;

  const data = `username=${username}&password=${password}&email=${email}`
  
  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: data,
    url,
  };
  const result = await axios(options)
  if(result.status === 200) {
    localStorage.setItem('token', result.data.token);
    localStorage.setItem('user', username);
    localStorage.setItem("userTemp", username)
    localStorage.setItem("email", email)
    window.location.href = '/' // or whatever route you want to redirect to
}
  return result;
};
