import AxiosRequest from './axiosConfig'

export const addNewPost = (data: { title: string, body: string, parent?: string }) => AxiosRequest.post("/posts", data);

export const getPosts = async () => {
  const response = await AxiosRequest.get("/posts");
  console.log(response.data);
  return response.data;
};

export const getPostByID = async (id: string) => {
  const response = await AxiosRequest.get(`/posts/${id}`);
  console.log(response.data);
  return response.data;
};

export const getPostsNumber = async () => {
  const response = await AxiosRequest.get("/posts-number");
  console.log(response.data);
  return response.data;
};

export const upvotePost = (id: string) => {
  AxiosRequest.post(`/posts/${id}/upvote`).then(response => {
    console.log(response);
    return response;
  });
};

export const downvotePost = (id: string) => {
  AxiosRequest.post(`/posts/${id}/downvote`).then(response => {
    console.log(response);
    return response;
  });
};

export const removeReaction = (id: string) => {
  AxiosRequest.post(`/posts/${id}/remove-reaction`).then(response => {
    console.log(response);
    return response;
  });
};
