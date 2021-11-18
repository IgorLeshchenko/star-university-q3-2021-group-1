import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../style";
import { IPost } from "../../../components/post/types";
import API from "../../../app/api/index";
import { useSelector, useDispatch } from "react-redux";
import { postsAction } from "../../../app/store/postsSlice";

interface Props {
  sortedPosts(srtdPosts: []): void;
}

interface StatePosts {
  posts: {
    posts: [];
  };
}

const SortByTopButton: React.FC<Props> = ({ sortedPosts }) => {
  const { button } = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state: StatePosts) => state.posts.posts);

  useEffect(() => {
    API.PostsRequest.getPosts().then(json => dispatch(postsAction.setPosts(json)));
  }, []);

  const sortByTop = () => {
    const sortedByTop = posts.slice().sort((a: IPost, b: IPost) => b.upvotes - a.upvotes);
    sortedPosts(sortedByTop as []);
  };

  return (
    <div>
      <Button variant="outlined" className={button} onClick={sortByTop}>
        TOP
      </Button>
    </div>
  );
};

export default SortByTopButton;
