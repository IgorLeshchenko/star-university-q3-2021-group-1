// import { Card, CardContent } from "@mui/material";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import "./post.css";

import { usePostStyles } from "./postStyle";
// import { ArrowUpward } from "@mui/icons-material";
import { ArrowUpward, ArrowDownward, Comment } from "@material-ui/icons";

export default function Post({ post }: any) {
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
              <ArrowUpward className={classes.arrowUp}/>
            </p>
            <div>0</div>
            <p>
              <ArrowDownward className={classes.arrowDown}/>
            </p>
          </div>
          <div className='post__bodyAndTitle'>
            <h3 className='post__title'>{post.title}</h3>
            <p className="post__bodyText">{post.body}</p>
          </div>
        </div>
        <div className="post__comments">
          <div className="post__comments_blocks">
            <Comment className={classes.comments}/>
            <span>0</span>
            <span>Comments</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
