import axios from "axios";
export const LoginService = async (email, password) => {
  const userTemp = localStorage.getItem("userTemp");
  const token = localStorage.getItem("token");
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/login`;
  console.log(url);
  const data = `password=${password}&email=${email}`;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
    data: data,
    url,
  };
  console.log(options);
  const result = await axios(options);
  if (result.status === 200) {
    localStorage.setItem("token", result.data.token);
    localStorage.setItem("user", userTemp);
    localStorage.setItem("email", email)
    window.location.href = "/"; // or whatever route you want to redirect to
  }

  console.log(result);
  return result?.data;
};
