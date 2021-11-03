import { Button, TextField } from "@material-ui/core";
import { useStyles } from "./forumStyle";
import Posts from "../posts/Posts";
import "./forum.css";

export default function Forum() {
  
  const classes = useStyles();
  return (
    <div className="forum">
      <div className="forum__topNav">
        <div className="forum__sort">
          <span className='forum__sort_text'>sort by:</span>
          <Button variant="outlined" className={classes.newButton}>New</Button>
          <Button variant="outlined">TOP</Button>
        </div>
        <div className="forum__searchAndNewPost">
          <TextField id="standard-basic" label="Search" variant="standard" />
          <Button variant="contained" className={classes.addNewPostButton}>Add new post</Button>
        </div>
      </div>
      <div className="forum__post">
        <Posts/>
      </div>
    </div>
  );
}
