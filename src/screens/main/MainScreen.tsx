import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { postsAction } from "../../app/store/postsSlice";

import Layout from "../../components/layout";
import { IPost, StatePosts } from "../../components/post/types";
import Post from "../../components/post";

import { useStyles } from "./style";

import SortByTopButton from "./components/SortByTopButton";

const MainScreen: React.FC = () => {
  const {
    button,
    sort,
    sortText,
    topNav,
    searchAndNewPost,
    post,
    search,
    sortNewButton,
    sortWrapper,
    addPostButton,
  } = useStyles();
  const history = useHistory();
  const posts = useSelector((state: StatePosts) => state.posts.posts);

  const [searchTerm, setSearchTerm] = useState("");

  const results = !searchTerm
    ? posts
    : posts.filter((post: IPost) => {
        return post.title.toLowerCase().includes(searchTerm.toLowerCase());
      });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const dispatch = useDispatch();

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
            <div className={sortWrapper}>
              <span className={sortText}>Sort by:</span>
              <Button variant="outlined" className={`${button} ${sortNewButton}`}>
                New
              </Button>
              <SortByTopButton sortedPosts={sortedPosts} />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
                className={search}
                value={searchTerm}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={searchAndNewPost}>
            <Button
              variant="contained"
              className={`${button} ${addPostButton}`}
              onClick={() => history.push("/addpost")}>
              Add new post
            </Button>
          </div>
        </div>
        <div className={post}>
          {console.log(posts)}
          {results
            .filter((post: IPost) => post.title !== "Comment")
            .map((post: IPost) => (
              <Post post={post} key={post._id} upvotes={post.upvotes} />
            ))}
          {!results.length && <Typography variant="h1">No Results Found!!</Typography>}
        </div>
      </Box>
    </Layout>
  );
};

export default MainScreen;
