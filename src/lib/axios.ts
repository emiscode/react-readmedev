import axios from "axios";
import env from "react-dotenv";

const api = (token?: string | null) => {
  return axios.create({
    baseURL: env?.SERVER_API_URL || "http://localhost:8000",
    headers: token
      ? {
          Accept: "application/json",
          Content: "application/json",
          Authorization: `Bearer ${token}`,
        }
      : { Accept: "application/json", Content: "application/json" },
  });
};

const http = api();

/* alternative way to insert token into each request */
http.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("token");

    if (token && config.headers) {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  function (error) {
    console.log("Erro no interceptor do axios", error);
    return Promise.reject(error);
  }
);

export default api;
