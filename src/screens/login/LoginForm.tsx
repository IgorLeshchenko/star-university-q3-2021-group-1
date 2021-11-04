import React from "react";
import { useStyles } from "./LoginStyle";
import { Typography, TextField, Button } from "@material-ui/core";

interface Props {
  show(change: boolean): void;
}

const LoginForm: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const signInHandler = () => {
    return props.show(true);
  };

  return (
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
          className={classes.buttonLogIn}
        >
          Log In
        </Button>
      </form>
      <div className={classes.signIn}>
        <Typography className={classes.paragraph}>
          New to Redditlone?
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className={classes.buttonSignIn}
          onClick={signInHandler}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
