import axios from "axios";

const apiURL = "http://localhost:3200";
const tokenHandler = axios.create({
  baseURL: `${apiURL}`
});

tokenHandler.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

export default tokenHandler;
