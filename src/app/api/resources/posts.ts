import axiosClient from "./axiosConfig";

export const addNewPost = (data: { title: string; body: string; parent?: string }) => {
  try {
    const response = axiosClient.post("/posts", data);
    return response;
  } catch (error: any) {
    throw Error(error?.message);
  }
};

export const getPosts = async () => {
  try {
    const response = await axiosClient.get("/posts");
    return response.data;
  } catch (error: any) {
    throw Error(error?.message);
  }
};

export const getPostsByPageSorted = async (pageNumber: number, typeOfSort: string) => {
  const params = {
    page: pageNumber,
    number: 5,
    sort: typeOfSort,
  };

  try {
    const response = await axiosClient.get("/posts", { params });
    return response.data;
  } catch (error: any) {
    throw Error(error?.message);
  }
};

export const getPostByID = async (id: string) => {
  try {
    await axiosClient.get(`/posts/${id}`).then(response => {
      return response;
    });
  } catch (error: any) {
    throw Error(error?.message);
  }
};

export const getPostsNumber = async () => {
  try {
    await axiosClient.get("/posts-number").then(response => {
      return response;
    });
  } catch (error: any) {
    throw Error(error?.message);
  }
};

export const upvotePost = (id: string) => {
  try {
    const response = axiosClient.post(`/posts/${id}/upvote`);
    return response;
  } catch (error: any) {
    throw Error(error?.message);
  }
};

export const downvotePost = (id: string) => {
  try {
    const response = axiosClient.post(`/posts/${id}/downvote`);
    return response;
  } catch (error: any) {
    throw Error(error?.message);
  }
};

export const removeReaction = (id: string) => {
  try {
    const response = axiosClient.post(`/posts/${id}/remove-reactions`);
    return response;
  } catch (error: any) {
    throw Error(error?.message);
  }
};
