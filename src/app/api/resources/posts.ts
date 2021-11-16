import axiosClient from "./axiosConfig";

export const addNewPost = (data: { title: string; body: string; parent?: string }) => {
  try {
    const response = axiosClient.post("/posts", data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async () => {
  try {
    await axiosClient.get("/posts").then(response => {
      console.log(response);
      return response;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPostByID = async (id: string) => {
  try {
    await axiosClient.get(`/posts/${id}`).then(response => {
      console.log(response);
      return response;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsNumber = async () => {
  try {
    await axiosClient.get("/posts-number").then(response => {
      console.log(response);
      return response;
    });
  } catch (error) {
    console.log(error);
  }
};

export const upvotePost = (id: string) => {
  try {
    const response = axiosClient.post(`/posts/${id}/upvote`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const downvotePost = (id: string) => {
  try {
    const response = axiosClient.post(`/posts/${id}/downvote`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const removeReaction = (id: string) => {
  try {
    const response = axiosClient.post(`/posts/${id}/remove-reactions`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
