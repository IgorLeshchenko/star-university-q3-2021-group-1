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
  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
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
    </form>
  );
}

export default PostCreation;
