// import { Card, CardContent } from "@mui/material";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import "./post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

export default function Post({ post }: any) {
  console.log(post);
  return (
    <div className="post">
      <Card>
        <CardContent>
          <div className="post__top">
            <div className="post__user">
              <Avatar alt="User img" src="https://www.kino-teatr.ru/movie/kadr/137719/pv_878912.jpg" />
              <span>User Name</span>
            </div>
            <div>data</div>
          </div>
          <h3>{post.title}</h3>
          <div className="forum__bodyAndVote">
            <div className="post__raiting">
              <p>
                <FontAwesomeIcon icon={faArrowUp} className='forum__upArrow arrow' />
              </p>
              <div>0</div>
              <p>
                <FontAwesomeIcon icon={faArrowDown} className='forum__downArrow arrow' />
              </p>
            </div>
            <p className="forum__bodyText">{post.body}</p>
          </div>
          <div className="forum__comments">
            <FontAwesomeIcon icon={faComment} className='forum__commentIcon comment'/>
            <span>0</span>
            <span>Comments</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
