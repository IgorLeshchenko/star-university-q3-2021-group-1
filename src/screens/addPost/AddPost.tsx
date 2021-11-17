import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, Card, TextareaAutosize, TextField, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

const AddPost: React.FC = () => {
  const { form, card, text, textfield, textarea, button } = useStyles();
  const history = useHistory();

  const handleSubmit = () => history.push("/");

  return (
    <form className={form} onSubmit={handleSubmit} data-testid="form-add">
      <Card className={card}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            p: 3,
            m: 8,
          }}>
          <Typography className={text}>Create a New Post</Typography>

          <TextField
            className={textfield}
            required
            variant="outlined"
            label="Title"
            role="textbox"
            name="title"
            data-testid="title"
          />

          <TextareaAutosize
            className={textarea}
            id="outlined-textarea"
            aria-label="empty textarea"
            placeholder="Your Post..."
            minRows={8}
          />

          <Button
            size="large"
            data-testid="submit-add"
            variant="contained"
            className={button}
            type="submit">
            Puplish a New Post
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AddPost;
