import axiosClient from "./axiosConfig";

export const addUser = (username: string, password: string) => {
  axiosClient.post("/users", {username,password}).then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })
};

export const loginUser = (username: string, password: string) => {
  axiosClient.post('/login',{username,password}).then(response =>{
    console.log(response.headers)
    return response.headers
  }).catch( error => {
    console.log(error);
  })
};

export const getToken = async () => {
 
  const response = await axiosClient.get(`/token`);
  console.log(response);
  return response;
};

export const logoutUser = () => {
  axiosClient.delete("/logout").then(response => {
    console.log(response);
    return response;
  }).catch( error => {
    console.log(error);
  })
};

export const getUserByUsernameReaction = async (username: string) => {
   await axiosClient.get(`/users/${username}/reactions`).then(response =>{
    console.log(response.data)
    return response.data
  }).catch( error => {
    console.log(error);
  })

};

export const getUserByUsername = async (username: string) => {
 await axiosClient.get(`/users/${username}`).then(response =>{
  console.log(response.data)
  return response.data
}).catch( error => {
  console.log(error);
})
};

export const addUserIcon = () => {};

export const getUserIcon = async (username: string) => {
   await axiosClient.get(`/users/${username}/icon`).then(response =>{
    console.log(response.data)
    return response.data
  }).catch( error => {
    console.log(error);
  })
};
