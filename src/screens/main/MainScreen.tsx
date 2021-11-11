import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@material-ui/core";

import Layout from "../../components/layout";
import { IPost } from "../../components/post/types";
import Post from "../../components/post";

import { useStyles } from "./style";

const MainScreen: React.FC = () => {
  const { button, sort, sortText, topNav, searchAndNewPost, post, search } = useStyles();
  const history = useHistory();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const results = !searchTerm
    ? posts
    : posts.filter((post: IPost) => {
        return post.title.toLowerCase().includes(searchTerm.toLowerCase());
      });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

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
            <Button variant="contained" className={button} onClick={() => history.push("/addpost")}>
              Add new post
            </Button>
          </div>
        </div>
        <div className={post}>
          {results.map((post: IPost) => (
            <Post post={post} key={post.id} />
          ))}
          {!results.length && <Typography variant="h1">No Results Found!!</Typography>}
        </div>
      </Box>
    </Layout>
  );
};

export default MainScreen;
