import { Button, TextField } from "@material-ui/core";
import { useStyles } from "./forumStyle";
import Posts from "../posts/Posts";

export default function Forum() {
  const classes = useStyles();

  return (
    <div className={classes.Forum}>
      <div className={classes.Forum__TopNav}>
        <div className={classes.Forum__Sort}>
          <span className={classes.Forum__SortText}>sort by:</span>
          <Button variant="outlined" className={classes.Button}>
            New
          </Button>
          <Button variant="outlined" className={classes.Button}>
            TOP
          </Button>
        </div>
        <div className={classes.Forum__SearchAndNewPost}>
          <TextField id="standard-basic" label="Search" variant="standard" />
          <Button variant="contained" className={classes.Button}>
            Add new post
          </Button>
        </div>
      </div>
      <div className={classes.Forum__Post}>
        <Posts />
      </div>
    </div>
  );
}
