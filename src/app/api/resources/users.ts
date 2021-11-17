import axiosClient from "./axiosConfig";

export const addUser = (username: string, password: string) => {
  try {
    const response = axiosClient.post("/users", { username, password });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axiosClient.post("/login", { username, password });

    if (response.data === "OK") {
      document.cookie = "accesstoken=" + response.headers.accesstoken;
      document.cookie = "refreshtoken=" + response.headers.refreshtoken;
      document.cookie = "username=" + username;
    }

    return response;
  } catch (error: any) {
    throw Error(error?.message);
  }
};

export const getToken = async () => {
  const response = await axiosClient.get(`/token`);
  document.cookie = "refreshtoken=" + response.headers.refreshtoken;
  return response;
};

export const logoutUser = () => {
  try {
    document.cookie = "accesstoken=''; max-age=-1;";
    document.cookie = "username=''; max-age=-1;";
    document.cookie = "refreshtoken=''; max-age=-1;";
  } catch (error) {
    console.log(error);
  }
};

export const getUserByUsernameReaction = async (username: string) => {
  try {
    const response = await axiosClient.get(`/users/${username}/reactions`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const response = await axiosClient.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addUserIcon = () => {};

export const getUserIcon = async (username: string) => {
  try {
    const response = await axiosClient.get(`/users/${username}/icon`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
