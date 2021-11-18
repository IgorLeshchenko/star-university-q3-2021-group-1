import axios from "axios";

import { getCookie } from "../../helpers/utils";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  async config => {
    const accessToken = getCookie("accesstoken");
    const refreshToken = getCookie("refreshtoken");

    if (accessToken) {
      return {
        ...config,
        headers: {
          ...config.headers,
          accesstoken: `${accessToken}`,
          refreshtoken: `${refreshToken}`,
        },
      };
    }
    return config;
  },
  error => Promise.reject(error),
);

export default axiosClient;
