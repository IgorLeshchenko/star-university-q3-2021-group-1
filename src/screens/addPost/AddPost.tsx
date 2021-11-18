import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, Card, TextareaAutosize, TextField, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

const AddPost: React.FC = () => {
  const { form, card, text, textfield, textarea, button, postCreationWrapper, formInnerWrapper } =
    useStyles();
  const history = useHistory();

  const handleSubmit = () => history.push("/");

  return (
    <div className={postCreationWrapper}>
      <form className={form} onSubmit={handleSubmit}>
        <Card className={card}>
          <Box
            className={formInnerWrapper}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: 3,
              m: 8,
            }}>
            <Typography variant="h1" className={text}>
              Create a New Post
            </Typography>

            <TextField className={textfield} required variant="outlined" label="Title" />

            <TextareaAutosize
              className={textarea}
              id="outlined-textarea"
              aria-label="empty textarea"
              placeholder="Type your text here..."
              minRows={8}
            />

            <Button size="large" variant="contained" className={button} type="submit">
              Puplish a New Post
            </Button>
          </Box>
        </Card>
      </form>
    </div>
  );
};

export default AddPost;
