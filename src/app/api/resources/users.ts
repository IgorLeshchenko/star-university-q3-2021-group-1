import API from "./axiosConfig";

export const addUser = (username: string, password: string) => {
  API.post("/users", {username,password}).then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })
};

export const loginUser = (username: string, password: string) => {
  API.post('/login',{username,password}).then(response =>{
    console.log(response.headers)
    return response.headers
  }).catch( error => {
    console.log(error);
  })
};

export const getToken = async () => {
 
  const response = await API.get(`/token`);
  console.log(response);
  return response;
};

export const logoutUser = () => {
  API.delete("/logout").then(response => {
    console.log(response);
    return response;
  }).catch( error => {
    console.log(error);
  })
};

export const getUserByUsernameReaction = async (username: string) => {
   await API.get(`/users/${username}/reactions`).then(response =>{
    console.log(response.data)
    return response.data
  }).catch( error => {
    console.log(error);
  })

};

export const getUserByUsername = async (username: string) => {
 await API.get(`/users/${username}`).then(response =>{
  console.log(response.data)
  return response.data
}).catch( error => {
  console.log(error);
})
};

export const addUserIcon = () => {};

export const getUserIcon = async (username: string) => {
   await API.get(`/users/${username}/icon`).then(response =>{
    console.log(response.data)
    return response.data
  }).catch( error => {
    console.log(error);
  })
};
