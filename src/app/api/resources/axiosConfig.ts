import axios, { AxiosRequestConfig } from "axios";
const AxiosRequest = () => {
    const defaultOptions:AxiosRequestConfig = {
      baseURL: 'https://starforum.herokuapp.com/api/v1',
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const instance = axios.create(defaultOptions);
    return instance;
  };
  
  export default AxiosRequest();