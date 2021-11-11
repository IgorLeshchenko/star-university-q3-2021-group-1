import axios from "axios";

export const addUser = async (name: string, pass: string) => {
  const data = {
    username: name,
    password: pass,
  };

  await axios.post("https://starforum.herokuapp.com/api/v1/users", data);
};

export const loginUser = (name: string, pass: string) => {
  const data = {
    username: name,
    password: pass,
  };
  axios.post("https://starforum.herokuapp.com/api/v1/login", data);
};

export const getToken = async (username: string) => {
  const config: any = {
    crossDomain: true,
    xhrFields: {
      withCredentials: true,
    },
  };
  const response = await axios.get(
    `https://starforum.herokuapp.com/api/v1/token/${username}`,
    config
  );
  console.log(response);
  return response;
};

export const logoutUser = () => {
  axios.delete("https://starforum.herokuapp.com/api/v1/logout");
};

export const getUserByUsernameReaction = async (username: string) => {
  const response = await axios.get(
    `https://starforum.herokuapp.com/api/v1/users/${username}/reactions`
  );
  console.log(response.data);
  return response.data;
};

export const getUserByUsername = async (username: string) => {
  const response = await axios.get(
    `https://starforum.herokuapp.com/api/v1/users/${username}`
  );
  console.log(response.data);
  return response.data;
};

export const addUserIcon = () => {};

export const getUserIcon = async (username: string) => {
  const response = await axios.get(
    `https://starforum.herokuapp.com/api/v1/users/${username}/icon`
  );
  console.log(response);
  return response.data;
};
