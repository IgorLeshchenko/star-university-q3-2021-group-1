import axios, { AxiosRequestConfig } from "axios";
const axiosClient = () => {
  const defaultOptions: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
  };
  return axios.create(defaultOptions);
};

export default axiosClient();
