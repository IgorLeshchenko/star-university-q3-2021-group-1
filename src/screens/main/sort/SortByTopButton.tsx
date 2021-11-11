import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../style";
import axios from "axios";
import { IPost } from "../../../components/post/types";

interface Props {
  sortedPosts(srtdPosts: []): void;
}

const SortByTopButton: React.FC<Props> = ({ sortedPosts }) => {
  const { button } = useStyles();

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await axios.get("https://starforum.herokuapp.com/api/v1/posts");
    setPosts(response.data);
  };

  const sortByTop = () => {
    getPosts();
  };

  useEffect(() => {
    const sortedByTop = posts.sort((a: IPost, b: IPost) => b.upvotes - a.upvotes);
    sortedPosts(sortedByTop as []);
  }, [posts]);

  return (
    <div>
      <Button variant="outlined" className={button} onClick={sortByTop}>
        TOP
      </Button>
    </div>
  );
};

export default SortByTopButton;
