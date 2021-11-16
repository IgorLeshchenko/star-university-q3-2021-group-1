import API from "./axiosConfig";

export const addNewPost = (data: { title: string; body: string; parent?: string }) =>
API.post("/posts", data).then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })

export const getPosts = async () => {
  await API.get("/posts").then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })

};

export const getPostByID = async (id: string) => {
   await API.get(`/posts/${id}`).then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })

};

export const getPostsNumber = async () => {
   await API.get("/posts-number").then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })
 
};

export const upvotePost = (id: string) => {
  API.post(`/posts/${id}/upvote`).then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })
};

export const downvotePost = (id: string) => {
  API.post(`/posts/${id}/downvote`).then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })
};

export const removeReaction = (id: string) => {
  API.post(`/posts/${id}/remove-reaction`).then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })
};
