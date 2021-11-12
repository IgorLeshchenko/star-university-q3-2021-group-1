import axios from "axios";

axios.defaults.baseURL = "https://starforum.herokuapp.com/api/v1";

export const addNewPost = (data: { title: string, body: string, parent?: string }) => axios.post("/posts", data);

export const getPosts = async () => {
  const response = await axios.get("/posts");
  console.log(response.data);
  return response.data;
};

export const getPostByID = async (id: string) => {
  const response = await axios.get(`/posts/${id}`);
  console.log(response.data);
  return response.data;
};

export const getPostsNumber = async () => {
  const response = await axios.get("/posts-number");
  console.log(response.data);
  return response.data;
};

export const upvotePost = (id: string) => {
  axios.post(`/posts/${id}/upvote`).then(response => {
    console.log(response);
    return response;
  });
};

export const downvotePost = (id: string) => {
  axios.post(`/posts/${id}/downvote`).then(response => {
    console.log(response);
    return response;
  });
};

export const removeReaction = (id: string) => {
  axios.post(`/posts/${id}/remove-reaction`).then(response => {
    console.log(response);
    return response;
  });
};
