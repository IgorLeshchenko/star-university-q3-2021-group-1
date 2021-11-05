import React from "react";
import { Card, CardContent, Avatar } from "@material-ui/core";
import { ArrowUpward, ArrowDownward, Comment } from "@material-ui/icons";

import { IPost } from "./types";
import { usePostStyles } from "./style";
import "./post.css";

type Props = {
  post: IPost;
};

const Post: React.FC<Props> = ({ post }) => {
  const classes = usePostStyles();

  return (
    <Card className={classes.post}>
      <CardContent>
        <div className="post__top">
          <div className="post__user">
            <Avatar
              alt="User img"
              src="https://www.kino-teatr.ru/movie/kadr/137719/pv_878912.jpg"
            />
            <span>User Name</span>
          </div>
          <div>data</div>
        </div>

        <div className="post__bodyAndVote">
          <div className="post__raiting">
            <p>
              <ArrowUpward className={classes.arrowUp} />
            </p>
            <div>0</div>
            <p>
              <ArrowDownward className={classes.arrowDown} />
            </p>
          </div>
          <div className="post__bodyAndTitle">
            <h3 className="post__title">{post.title}</h3>
            <p className="post__bodyText">{post.body}</p>
          </div>
        </div>
        <div className="post__comments">
          <div className="post__comments_blocks">
            <Comment className={classes.comments} />
            <span>0</span>
            <span>Comments</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;
