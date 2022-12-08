import axios from "axios";
import env from "react-dotenv";

const api = () => {
  return axios.create({
    baseURL: env.SERVER_API_URL,
  });
};

export default api;
