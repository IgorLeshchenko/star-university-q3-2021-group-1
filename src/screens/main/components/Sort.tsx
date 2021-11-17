import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../style";

import { useDispatch } from "react-redux";
import { postsAction } from "../../../app/store/postsSlice";

interface Props {
  sortedPosts(srtdPosts: []): void;
}

const Sort: React.FC<Props> = ({ sortedPosts }) => {
  const { button } = useStyles();
  const dispatch = useDispatch();

  const sortByNew = () => {
    fetch("https://starforum.herokuapp.com/api/v1/posts?sort=recent")
      .then(response => response.json())
      .then(json => dispatch(postsAction.setPosts(json)));
  };

  const sortByTop = () => {
    fetch("https://starforum.herokuapp.com/api/v1/posts?sort=most-upvotes")
        .then(response => response.json())
        .then(json => dispatch(postsAction.setPosts(json)));
  };

  return (
    <div>
      <Button variant="outlined" className={button} onClick={sortByNew}>
        NEW
      </Button>
      <Button variant="outlined" className={button} onClick={sortByTop}>
        TOP
      </Button>
    </div>
  );
};

export default Sort;
