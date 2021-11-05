import { useEffect, useState } from "react";
import Post from "../post/Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);
  console.log(posts);

  return (
    <div>
      {posts.map(post => (
        <Post post={post} key={post} />
      ))}
    </div>
  );
}
