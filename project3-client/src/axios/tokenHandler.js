import axios from "axios";

const tokenHandler = axios.create();

tokenHandler.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

export default tokenHandler;
