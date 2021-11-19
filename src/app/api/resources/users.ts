import axiosClient from "./axiosConfig";

export const addUser = (username: string, password: string) => {
  try {
    const response = axiosClient.post("/users", { username, password });
    return response;
  } catch (error: any) {
    throw Error(error?.message);
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
  } catch (error: any) {
    throw Error(error?.message);
  }
};

export const getUserByUsernameReaction = async (username: string) => {
  try {
    const response = await axiosClient.get(`/users/${username}/reactions`);
    return response.data;
  } catch (error: any) {
    throw Error(error?.message);
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const response = await axiosClient.get(`/users/${username}`);
    return response.data;
  } catch (error: any) {
    throw Error(error?.message);
  }
};

export const addUserIcon = (username: string) => {
  try {
    axiosClient.post(
      `/users/${username}/icon`,
      "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    );
  } catch (error: any) {
    throw Error(error?.message);
  }
};

export const getUserIcon = async (username: string) => {
  try {
    const response = await axiosClient.get(`/users/${username}/icon`);
    return response.data;
  } catch (error: any) {
    throw Error(error?.message);
  }
};
