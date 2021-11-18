import React from "react";
import { Card, CardContent, Avatar } from "@material-ui/core";
import { ArrowUpward, ArrowDownward, Comment } from "@material-ui/icons";

import { IPost } from "./types";
import { usePostStyles } from "./style";
import formatDistance from "date-fns/formatDistance";
import "../testStyle.css";

type Props = {
  post: IPost;
};

const Post: React.FC<Props> = ({ post }) => {
  const classes = usePostStyles();

  const dateOfPostsFromNow = formatDistance(new Date(post.date), new Date(), {
    addSuffix: true,
  });

  return (
    <Card className={classes.post}>
      <CardContent>
        <div className={classes.post__Top}>
          <div className={classes.post__User}>
            <Avatar
              alt="User img"
              src="https://www.kino-teatr.ru/movie/kadr/137719/pv_878912.jpg"
            />
            <span data-testid="user-name">{post.author}</span>
          </div>
          <div className={classes.post__Date}>{dateOfPostsFromNow}</div>
        </div>

        <div className={classes.post__BodyAndVote}>
          <div className={classes.post__Raiting}>
            <p>
              <ArrowUpward className={classes.arrowUp} />
            </p>
            <div>{post.upvotes}</div>
            <p>
              <ArrowDownward className={classes.arrowDown} />
            </p>
          </div>
          <div>
            <h3 className={classes.post__Title}>{post.title}</h3>
            <p className={classes.post__BodyText}>{post.body}</p>
          </div>
        </div>
        <div className={classes.post__Comments}>
          <div className={classes.post__CommentsBlocks}>
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
