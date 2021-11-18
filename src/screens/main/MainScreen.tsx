import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { postsAction } from "../../app/store/postsSlice";

import Layout from "../../components/layout";
import { IPost, StatePosts } from "../../components/post/types";
import { authSelector } from "../../app/store/auth/selectors";
import SortByTopButton from "./components/SortByTopButton";
import Post from "../../components/post";
import { useStyles } from "./style";

const MainScreen: React.FC = () => {
  const { button, sort, sortText, topNav, searchAndNewPost, post, search } = useStyles();
  const history = useHistory();
  const posts = useSelector((state: StatePosts) => state.posts.posts);
  const { user } = useSelector(authSelector);

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
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              className={search}
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          {user && (
            <div className={searchAndNewPost}>
              <Button
                variant="contained"
                className={button}
                onClick={() => history.push("/star-university-q3-2021-group-1/addpost")}>
                Add new post
              </Button>
            </div>
          )}
        </div>
        <div className={post}>
          {results
            .filter((post: IPost) => post.title !== "Comment")
            .map((post: IPost) => (
              <Post post={post} key={post._id} />
            ))}
          {!results.length && <Typography variant="h1">No Results Found!!</Typography>}
        </div>
      </Box>
    </Layout>
  );
};

export default MainScreen;
