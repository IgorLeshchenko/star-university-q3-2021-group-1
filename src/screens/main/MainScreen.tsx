import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { postsAction } from "../../app/store/postsSlice";

import Layout from "../../components/layout";
import { IPost } from "../../components/post/types";
import Post from "../../components/post";

import { useStyles } from "./style";

import SortByTopButton from "./sort/SortByTopButton";

interface StatePosts {
  posts: {
    posts: [];
  };
}

const MainScreen: React.FC = () => {
  const { button, sort, sortText, topNav, searchAndNewPost, post } = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const posts = useSelector((state: StatePosts) => state.posts.posts);

  useEffect(() => {
    fetch("https://starforum.herokuapp.com/api/v1/posts")
      .then(response => response.json())
      .then(json => dispatch(postsAction.setPosts(json)));
  }, []);

  const sortedPosts = (srtdPosts: []) => {
    dispatch(postsAction.setPosts(srtdPosts));
  };

  return (
    <Layout>
      <Box py={10}>
        <div className={topNav}>
          <div className={sort}>
            <span className={sortText}>Sort by:</span>
            <Button variant="outlined" className={button}>
              New
            </Button>
            <SortByTopButton sortedPosts={sortedPosts} />
          </div>
          <div className={searchAndNewPost}>
            <TextField id="standard-basic" label="Search" variant="standard" />
            <Button variant="contained" className={button} onClick={() => history.push("/addpost")}>
              Add new post
            </Button>
          </div>
        </div>
        <div className={post}>
          {console.log(posts)}
          {posts.filter((post: IPost) => post.title !== 'Comment').map((post: IPost) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </Box>
    </Layout>
  );
};

export default MainScreen;
