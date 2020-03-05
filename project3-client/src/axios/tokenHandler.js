import axios from "axios";

const tokenHandler = axios.create({
  baseURL: `http://ec2-34-238-40-189.compute-1.amazonaws.com:3200`
});

tokenHandler.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

export default tokenHandler;
