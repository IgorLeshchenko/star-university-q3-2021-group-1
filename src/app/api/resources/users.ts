import axiosClient from "./axiosConfig";

export const addUser = (username: string, password: string) => {
  try {
    const response = axiosClient.post("/users", { username, password });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username: string, password: string) => {
  const response = await axiosClient.post("/login", { username, password });
  try {
    console.log(response.headers);
    return response.headers;
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async () => {
  //Переделаю по надобности, есть подозрение что он не понадобится
  const response = await axiosClient.get(`/token`);
  console.log(response);
  return response;
};

export const logoutUser = async () => {
  try {
    const response = await axiosClient.delete("/logout");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByUsernameReaction = async (username: string) => {
  try {
    const response = await axiosClient.get(`/users/${username}/reactions`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const response = await axiosClient.get(`/users/${username}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addUserIcon = () => {};

export const getUserIcon = async (username: string) => {
  try {
    const response = await axiosClient.get(`/users/${username}/icon`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
