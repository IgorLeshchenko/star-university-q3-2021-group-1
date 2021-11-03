import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Posts from "../posts/Posts";
import "./forum.css";

const useStyles = makeStyles((theme) => ({
  
  newButton: {
    backgroundColor: "#F48023",
    color: "#FFF",

    "&:hover": {
      backgroundColor: "#b45100",
      borderColor: "#b45100",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#b45100",
      borderColor: "#b45100",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #b451008f",
    },
  },

  addNewPostButton: {
    backgroundColor: "#42a5f5",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#1976d2",
      borderColor: "#fff",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#1565c0",
      borderColor: "#fff",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #cbe3ff84",
    },
  },

  title: {
    flexGrow: 1,
  },
}));

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
