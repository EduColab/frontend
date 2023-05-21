import axios from "axios";
export const LoginService = async (email, password) => {
  const url = process.env.NEXT_PUBLIC_LOGIN_API;
  console.log(url);
  const data = `password=${password}&email=${email}`;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_LOGIN_TOKEN}`,
    },
    data: data,
    url,
  };
  console.log(options);
  const result = await axios(options);
  return result?.data;
};

