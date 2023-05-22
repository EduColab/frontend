import axios from "axios";
export const postCourseService = async (name, description) => {
  const userTemp = localStorage.getItem("userTemp");
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const url = `${process.env.NEXT_PUBLIC_API_URL}/courses/?type=community`;
  console.log(url);
  const data = `name=${name}&description=${description}&type=${"community"}&owner=${email}`;

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
    window.location.href = "/community"; // or whatever route you want to redirect to
  }

  console.log(result);
  return result?.data;
};
