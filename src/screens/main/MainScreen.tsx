import React, { useEffect, useState } from "react";
import useDebounce from "../../app/hooks/useDebounce";
import { useHistory } from "react-router-dom";
import { Box, Button, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { postsAction } from "../../app/store/postsSlice";
import { fetchingAction } from "../../app/store/fetchingSlice";
import useScroll from "../../app/hooks/useScroll";
import Layout from "../../components/layout";
import { IPost, StatePosts, Fetch } from "../../components/post/types";
import { authSelector } from "../../app/store/auth/selectors";
import SortByTopButton from "./components/SortByTopButton";
import Post from "../../components/post";
import { useStyles } from "./style";
import NotFoundMessage from "./components/NotFoundMessage";
import Spinner from "./Spinner";



const MainScreen: React.FC = () => {
  const { button, sort, sortText, topNav, searchAndNewPost, post, search } = useStyles();
  const history = useHistory();
  const posts = useSelector((state: StatePosts) => state.posts.posts);
  const fetching = useSelector((state: Fetch) => state.fetching.fetching);
  const { user } = useSelector(authSelector);

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useScroll();

  const debouncedSearchTerm = useDebounce(searchTerm, 600);
  useEffect(() => {
    if (fetching) {
      fetch(`https://starforum.herokuapp.com/api/v1/posts?page=${page}&number=5`)
        .then(response => response.json())
        .then(json => {
          dispatch(postsAction.setPosts([...posts, ...json]));
          setPage(previousPageNumber => previousPageNumber + 1);
        })
        .finally(() => dispatch(fetchingAction.setFetching()));
    }
  }, [fetching]);

  useEffect(() => {
    const results = !debouncedSearchTerm
        ? posts
        : posts.filter((post: IPost) => {
          return post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
        });
    setSearchResults(results);
  }, [posts, debouncedSearchTerm]);

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
          {isLoading ? (
            <Spinner loading={isLoading} />
          ) : (
            searchResults
              .filter((post: IPost) => post.title !== "Comment")
              .map((post: IPost) => <Post post={post} key={post._id} />)
          )}

          {!isLoading && !searchResults.length && <NotFoundMessage searcTerm={searchTerm} />}
        </div>
        <div>
          <Button variant="outlined" className={button} onClick={backHandler}>
            Back
          </Button>
          <Button variant="outlined" className={button} onClick={forwardHandler}>
            Forward
          </Button>
        </div>
      </Box>
    </Layout>
  );
};
export default MainScreen;
