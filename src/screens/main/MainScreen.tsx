import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { postsAction } from "../../app/store/postsSlice";
import _ from "lodash";

import Layout from "../../components/layout";
import { IPost, StatePosts } from "../../components/post/types";
import Post from "../../components/post";

import { useStyles } from "./style";

import SortByTopButton from "./components/SortByTopButton";

const MainScreen: React.FC = () => {
  const { button, sort, sortText, topNav, searchAndNewPost, post, search } =
    useStyles();
  const history = useHistory();
  const posts = useSelector((state: StatePosts) => state.posts.posts);

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  let scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight,
  );

  useEffect(() => {
    fetch("https://starforum.herokuapp.com/api/v1/posts")
      .then(response => response.json())
      .then(json => dispatch(postsAction.setPosts(json)));
  }, []);

  const render = () => {
    if(window.scrollY > scrollHeight * 0.7){
      setPage(page + 1);
    }
  };

  const time = 1000;
  const delay = _.debounce(render, time);
  window.addEventListener("scroll", delay);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", delay);
    };
  }, []);

  const results = !searchTerm
    ? posts
    : posts.filter((post: IPost) => {
        return post.title.toLowerCase().includes(searchTerm.toLowerCase());
      });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

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
          <div className={searchAndNewPost}>
            <Button
              variant="contained"
              className={button}
              onClick={() => history.push("/star-university-q3-2021-group-1/addpost")}>
              Add new post
            </Button>
          </div>
        </div>
        <div className={post}>
          {results
            .filter((post: IPost) => post.title !== "Comment")
            .slice(1 * page - 1, 5 * page)
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
