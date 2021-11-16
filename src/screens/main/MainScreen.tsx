import React, { useEffect, useMemo, useState } from "react";
import debouce from "lodash.debounce";
import { useHistory } from "react-router-dom";
import { Box, Button, TextField, Card, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { postsAction } from "../../app/store/postsSlice";
import Layout from "../../components/layout";
import { IPost, StatePosts } from "../../components/post/types";
import Post from "../../components/post";
import { useStyles } from "./style";
import SortByTopButton from "./components/SortByTopButton";
import ClipLoader from "react-spinners/ClipLoader";
import { BiMessageSquareError } from "react-icons/bi";

const MainScreen: React.FC = () => {
  const { button, sort, sortText, topNav, searchAndNewPost, post, search } = useStyles();
  const history = useHistory();
  const posts = useSelector((state: StatePosts) => state.posts.posts);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const results = !searchTerm
      ? posts
      : posts.filter((post: IPost) => {
          return post.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
    setSearchResults(results);
  }, [posts, searchTerm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://starforum.herokuapp.com/api/v1/posts")
      .then(response => response.json())
      .then(json => {
        dispatch(postsAction.setPosts(json));
        setIsLoading(false);
      });
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
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              className={search}
              onChange={debouncedResults}
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
          {console.log(posts)}
          {isLoading ? (
            <ClipLoader color={"#4A90E2"} loading={isLoading} size={80} />
          ) : (
            searchResults
              .filter((post: IPost) => post.title !== "Comment")
              .map((post: IPost) => <Post post={post} key={post._id} />)
          )}

          {!isLoading && !searchResults.length && (
            <Card>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                  m: 8,
                }}>
                <Typography variant="h4">
                  <BiMessageSquareError fontSize="100" />
                </Typography>
                <Typography variant="h5">
                  There aren’t any search results for "{searchTerm}", does it even exist?
                </Typography>
                <Typography>
                  Looks like there aren’t any results for “{searchTerm}”. Try double-checking your
                  spelling or searching for a related post.
                </Typography>
              </Box>
            </Card>
          )}
        </div>
      </Box>
    </Layout>
  );
};
export default MainScreen;
