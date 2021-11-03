import React from "react";
import { useStyles, theme } from "./LoginStyle";
import {
  Typography,
  TextField,
  ThemeProvider,
  Button,
} from "@material-ui/core";

const LoginPage = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.frame}>
        <h1 className={classes.header}>We've missed you!</h1>
        <Typography className={classes.paragraph}>Login</Typography>
        <form className={classes.form} color="main">
          <TextField
            variant="outlined"
            label="username"
            type="text"
            className={classes.input}
            color="secondary"
            required={true}
          />
          <TextField
            variant="outlined"
            label="password"
            type="text"
            className={classes.input}
            color="secondary"
            required={true}
          />
          <Button
            color="secondary"
            variant="contained"
            className={classes.button}
          >
            Log In
          </Button>
        </form>
      </div>
      <div className={classes.wrapper}>
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;
