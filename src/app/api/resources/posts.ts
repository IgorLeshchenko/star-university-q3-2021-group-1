import axiosClient from "./axiosConfig";

export const addNewPost = (data: { title: string; body: string; parent?: string }) => {
  try {
    const response = axiosClient.post("/posts", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async () => {
  try {
    const response = await axiosClient.get("/posts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostByID = async (id: string) => {
  try {
    await axiosClient.get(`/posts/${id}`).then(response => {
      return response;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsNumber = async () => {
  try {
    await axiosClient.get("/posts-number").then(response => {
      return response;
    });
  } catch (error) {
    console.log(error);
  }
};

export const upvotePost = (id: string) => {
  try {
    const response = axiosClient.post(`/posts/${id}/upvote`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const downvotePost = (id: string) => {
  try {
    const response = axiosClient.post(`/posts/${id}/downvote`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const removeReaction = (id: string) => {
  try {
    const response = axiosClient.post(`/posts/${id}/remove-reactions`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
