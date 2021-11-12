import AxiosRequest from "./axiosConfig";

export const addUser = (name: string, pass: string) => {
  const data = {
    username: name,
    password: pass,
  };

  AxiosRequest.post("/users", data);
};

export const loginUser = (name: string, pass: string) => {
  const data = {
    username: name,
    password: pass,
  };
  fetch("https://starforum.herokuapp.com/api/v1/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getToken = async (username: string) => {
  const config: any = {
    crossDomain: true,
    xhrFields: {
      withCredentials: true,
    },
  };
  const response = await AxiosRequest(`/token/${username}`, config);
  console.log(response);
  return response;
};

export const logoutUser = () => {
  AxiosRequest.delete("/logout").then(response => {
    console.log(response);
    return response;
  });
};

export const getUserByUsernameReaction = async (username: string) => {
  const response = await AxiosRequest(`/users/${username}/reactions`);
  console.log(response.data);
  return response.data;
};

export const getUserByUsername = async (username: string) => {
  const response = await AxiosRequest(`/users/${username}`);
  console.log(response.data);
  return response.data;
};

export const addUserIcon = () => {};

export const getUserIcon = async (username: string) => {
  const response = await AxiosRequest(`/users/${username}/icon`);
  console.log(response);
  return response.data; // img in Base64 format
};
