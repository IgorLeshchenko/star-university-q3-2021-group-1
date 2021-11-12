import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, TextField } from "@material-ui/core";

import Layout from "../../components/layout";
import { IPost } from "../../components/post/types";
import Post from "../../components/post";

import { useStyles } from "./style";

const MainScreen: React.FC = () => {
  const { button, sort, sortText, topNav, searchAndNewPost, post, search } = useStyles();
  const history = useHistory();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);

  return (
    <Layout>
      <Box py={10}>
        <div className={topNav}>
          <div className={sort}>
            <span className={sortText}>Sort by:</span>
            <Button variant="outlined" className={button}>
              New
            </Button>
            <Button variant="outlined" className={button}>
              TOP
            </Button>
            <TextField id="standard-basic" label="Search" variant="standard" className={search} />
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
          {posts.map((post: IPost) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </Box>
    </Layout>
  );
};

export default MainScreen;
