import { useEffect, useState } from "react";

import { IPost } from "../post/types";
import Post from "../post";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div>
      {posts.map((post: IPost) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
