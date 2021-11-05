import React from "react";
import { Card, CardContent, Avatar } from "@material-ui/core";
import { ArrowUpward, ArrowDownward, Comment } from "@material-ui/icons";

import { IPost } from "./types";
import { usePostStyles } from "./style";

type Props = {
  post: IPost;
};

const Post: React.FC<Props> = ({ post }) => {
  const classes = usePostStyles();

  return (
    <Card className={classes.Post}>
      <CardContent>
        <div className={classes.Post__Top}>
          <div className={classes.Post__User}>
            <Avatar
              alt="User img"
              src="https://www.kino-teatr.ru/movie/kadr/137719/pv_878912.jpg"
            />
            <span>User Name</span>
          </div>
          <div>data</div>
        </div>

        <div className={classes.Post__BodyAndVote}>
          <div className={classes.Post__Raiting}>
            <p>
              <ArrowUpward className={classes.ArrowUp} />
            </p>
            <div>0</div>
            <p>
              <ArrowDownward className={classes.ArrowDown} />
            </p>
          </div>
          <div>
            <h3 className={classes.Post__Title}>{post.title}</h3>
            <p className={classes.Post__BodyText}>{post.body}</p>
          </div>
        </div>
        <div className={classes.Post__Comments}>
          <div className={classes.Post__CommentsBlocks}>
            <Comment className={classes.Comments} />
            <span>0</span>
            <span>Comments</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;
