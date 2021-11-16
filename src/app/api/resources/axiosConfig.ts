import axios, { AxiosRequestConfig } from "axios";
const API = () => {
  const defaultOptions: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
  };
  return axios.create(defaultOptions);
};

export default API();
