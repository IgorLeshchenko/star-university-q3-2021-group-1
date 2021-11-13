import axios, { AxiosRequestConfig } from "axios";
const AxiosRequest = () => {
  const defaultOptions: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
  };
  return axios.create(defaultOptions);
};

export default AxiosRequest();
