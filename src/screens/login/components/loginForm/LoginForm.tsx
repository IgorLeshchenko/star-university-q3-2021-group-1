import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";

import { useStyles } from "../../style";

interface Props {
  show(change: boolean): void;
  onSubmit(e: React.SyntheticEvent): void;
}

const LoginForm: React.FC<Props> = ({ show, onSubmit }) => {
  const { frame, header, paragraph, form, input, buttonLogIn, signIn, buttonSignIn } = useStyles();

  const signInHandler = () => show(true);

  return (
    <div className={frame}>
      <h1 className={header}>We've missed you!</h1>
      <Typography className={paragraph}>Login</Typography>
      <form className={form} color="main" onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          label="username"
          type="text"
          className={input}
          color="secondary"
          required={true}
        />
        <TextField
          variant="outlined"
          label="password"
          type="password"
          className={input}
          color="secondary"
          required={true}
        />
        <Button color="secondary" variant="contained" className={buttonLogIn} type="submit">
          Log In
        </Button>
      </form>
      <div className={signIn}>
        <Typography className={paragraph}>New to Redditlone?</Typography>
        <Button
          color="secondary"
          variant="contained"
          className={buttonSignIn}
          onClick={signInHandler}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
