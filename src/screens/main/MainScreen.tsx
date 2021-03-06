import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, TextField } from "@material-ui/core";

import API from "../../app/api";
import useDebounce from "../../app/hooks/useDebounce";
import { postsAction } from "../../app/store/postsSlice";
import { fetchingAction } from "../../app/store/fetchingSlice";
import { authSelector } from "../../app/store/auth/selectors";
import useScroll from "../../app/hooks/useScroll";

import Layout from "../../components/layout";
import { IPost, StatePosts, Fetch } from "../../components/post/types";
import Post from "../../components/post";
import NotFoundMessage from "./components/NotFoundMessage";
import Spinner from "./Spinner";

import { useStyles } from "./style";

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
  const dispatch = useDispatch();
  const history = useHistory();
  useScroll();

  const posts = useSelector((state: StatePosts) => state.posts.posts);
  const fetching = useSelector((state: Fetch) => state.fetching.fetching);
  const { user } = useSelector(authSelector);

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [typeOfSort, setTypeOfSort] = useState("default");
  const debouncedSearchTerm = useDebounce(searchTerm, 600);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);

  const getAndSort = (type: string) => {
    dispatch(postsAction.setPosts([]));
    setIsLoading(true);
    setPage(1);
    setTypeOfSort(type);
    dispatch(fetchingAction.setFetching());
  };

  const sortByNew = () => getAndSort("recent");

  const sortByTop = () => {
    getAndSort("most-upvotes");
  };
  

  useEffect(() => {
    if (fetching) {
      API.PostsRequest.getPostsByPageSorted(page, typeOfSort)
        .then(json => {
          dispatch(postsAction.setPosts([...posts, ...json]));
          setPage(previousPageNumber => previousPageNumber + 1);
          setIsLoading(false);
        })
        .finally(() => {
          dispatch(fetchingAction.setFetching());
        });
    }
  }, [fetching]);

  
  useEffect(() => {
    if (fetching === false) {
      dispatch(fetchingAction.setFetching());
    }
    const results = !debouncedSearchTerm
      ? posts
      : posts.filter((post: IPost) => {
          return post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
        });
    setSearchResults(results);
  }, [posts, debouncedSearchTerm]);


  return (
    <Layout>
      <Box py={10}>
        <div className={topNav}>
          <div className={sort}>
            <div className={sortWrapper}>
              <span className={sortText}>Sort by:</span>
              <Button
                variant="outlined"
                className={`${button} ${sortNewButton}`}
                onClick={sortByNew}>
                New
              </Button>
              <Button variant="outlined" onClick={sortByTop} className={button}>
                Top
              </Button>
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
                className={search}
                onChange={handleChange}
              />
            </div>
          </div>
          {user && (
            <div className={searchAndNewPost}>
              <Button
                variant="contained"
                className={`${button} ${addPostButton}`}
                onClick={() => history.push("/addpost")}>
                Add new post
              </Button>
            </div>
          )}
        </div>
        <div className={post}>
          {isLoading ? (
            <Spinner loading={isLoading} />
          ) : (
            searchResults
              .filter((post: IPost) => post.title !== "Comment")
              .map((post: IPost) => <Post post={post} key={post._id} />)
          )}

          {!isLoading && !searchResults.length && <NotFoundMessage searcTerm={searchTerm} />}
        </div>
      </Box>
    </Layout>
  );
};
export default MainScreen;
