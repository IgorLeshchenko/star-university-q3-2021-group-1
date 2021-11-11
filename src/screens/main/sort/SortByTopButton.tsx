import React, {useState, useEffect} from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../style";
import axios from 'axios';

interface Post {
  author: string,
  body: string,
  children: Post[],
  date: string,
  level: number,
  parent: string,
  title: string,
  upvotes: number,
  __v?: number,
  _id: string,
}

interface Props {
  sortedPosts(srtdPosts: []): void;
}


const SortByTopButton: React.FC<Props> = ({sortedPosts}) => {
  const { button } = useStyles();

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response= await axios.get('https://starforum.herokuapp.com/api/v1/posts');
    setPosts(response.data);
  }

  const sortByTop = () => {
    getPosts();
  };

  useEffect(() => {
    const sortedByTop = posts.sort((a: Post, b: Post) => b.upvotes - a.upvotes);
    console.log(sortedByTop);
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
