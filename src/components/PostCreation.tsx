// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  CardActions,
  Typography,
} from "@material-ui/core";
import Card from "@mui/material/Card";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import classes from "./PostCreation.module.css";

function PostCreation(props: any) {
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const history = useHistory();

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    // const blog = { title, body };

    // fetch("http://localhost:3000", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(blog),
    // }).then(() => {
    // setIsPending(false);
    // history.push("/");
    // });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Card>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          style={{ minHeight: "70vh" }}
          spacing={5}
        >
          <Grid item>
            <Typography variant="h5" color="primary">
              Create a New Post
            </Typography>
          </Grid>
          <TextField
            required
            variant="outlined"
            label="Title"
            style={{ marginBottom: "2em" }}
            onChange={props.savePostTitleToState}
          />

          <TextareaAutosize
            id="outlined-textarea"
            aria-label="empty textarea"
            placeholder="Your Post..."
            style={{ width: 380, height: 180, marginBottom: "2em" }}
            onChange={props.savePostContentToState}
          />

          <CardActions>
            <Button size="large" variant="contained" color="primary">
              Puplish a New Post
            </Button>
          </CardActions>
        </Grid>
      </Card>

      <CardActions>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          direction="row"
          spacing={0}
        >
          <Button size="large" variant="contained" color="primary">
            All Posts
          </Button>
          <Button size="large" variant="contained" color="primary">
            My Profile
          </Button>
        </Grid>
      </CardActions>
    </form>
  );
}

export default PostCreation;
