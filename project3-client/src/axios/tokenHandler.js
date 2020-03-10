import axios from "axios";

const tokenHandler = axios.create({
  baseURL: `http://localhost:3200`
});

tokenHandler.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

export default tokenHandler;
