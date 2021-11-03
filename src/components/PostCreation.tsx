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

function PostCreation() {
  return (
    <form className={classes.form}>
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
          />

          <TextareaAutosize
            id="outlined-textarea"
            aria-label="empty textarea"
            placeholder="Your Post..."
            style={{ width: 380, height: 180, marginBottom: "2em" }}
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
