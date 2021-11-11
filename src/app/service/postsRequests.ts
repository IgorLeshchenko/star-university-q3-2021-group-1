import axios from "axios";

export const addNewPost = (title: string, body: string, parent: string) => {
  const datas = {
    title: title,
    body: body,
    parent: parent,
  };
  axios.post("https://starforum.herokuapp.com/api/v1/posts", datas);
};

export const getPosts = async () => {
  const response = await axios.get(
    "https://starforum.herokuapp.com/api/v1/posts"
  );
  console.log(response.data);
  return response.data;
};

export const getPostByID = async (id: string) => {
  const response = await axios.get(
    `https://starforum.herokuapp.com/api/v1/posts/${id}`
  );
  console.log(response.data);
  return response.data;
};

export const getPostsNumber = async () => {
  const response = await axios.get(
    "https://starforum.herokuapp.com/api/v1/posts-number"
  );
  console.log(response.data);
  return response.data;
};

export const upvotePost = (id: string) => {
  axios.post(`https://starforum.herokuapp.com/api/v1/posts/${id}/upvote`);
  return;
};

export const downvotePost = (id: string) => {
  axios.post(`https://starforum.herokuapp.com/api/v1/posts/${id}/downvote`);
  return;
};

export const removeReaction = (id: string) => {
  axios.post(
    `https://starforum.herokuapp.com/api/v1/posts/${id}/remove-reaction`
  );
  return;
};
