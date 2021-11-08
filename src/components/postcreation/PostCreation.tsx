import { TextField, Button, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useStyles } from "./PostCreationStyles";

function PostCreation() {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <Card className={classes.card}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            p: 3,
            m: 8,
          }}>
          <Typography className={classes.text}>Create a New Post</Typography>

          <TextField className={classes.textfield} required variant="outlined" label="Title" />

          <TextareaAutosize
            className={classes.textarea}
            id="outlined-textarea"
            aria-label="empty textarea"
            placeholder="Your Post..."
            minRows={8}
          />

          <Button size="large" variant="contained" className={classes.Button}>
            Puplish a New Post
          </Button>
        </Box>
      </Card>
    </form>
  );
}

export default PostCreation;
