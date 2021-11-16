import axiosClient from "./axiosConfig";

export const addNewPost = (data: { title: string; body: string; parent?: string }) =>
axiosClient.post("/posts", data).then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })

export const getPosts = async () => {
  await axiosClient.get("/posts").then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })

};

export const getPostByID = async (id: string) => {
   await axiosClient.get(`/posts/${id}`).then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })

};

export const getPostsNumber = async () => {
   await axiosClient.get("/posts-number").then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })
 
};

export const upvotePost = (id: string) => {
  axiosClient.post(`/posts/${id}/upvote`).then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })
};

export const downvotePost = (id: string) => {
  axiosClient.post(`/posts/${id}/downvote`).then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })
};

export const removeReaction = (id: string) => {
  axiosClient.post(`/posts/${id}/remove-reaction`).then(response =>{
    console.log(response)
    return response
  }).catch( error => {
    console.log(error);
  })
};
