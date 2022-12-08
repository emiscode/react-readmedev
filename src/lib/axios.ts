import axios from "axios";
import env from "react-dotenv";

const api = (token?: string | null) => {
  return axios.create({
    baseURL: env.SERVER_API_URL,
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
  });
};

export default api;
