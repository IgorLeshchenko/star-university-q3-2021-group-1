import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";

import { useStyles } from "../../style";

interface Props {
  show(change: boolean): void;
  onSubmit(e: React.SyntheticEvent): void;
}

const SignUpForm: React.FC<Props> = ({ show, onSubmit }) => {
  const { frame, header, paragraph, form, input, buttonLogIn, signIn, buttonSignIn } = useStyles();

  const logInHandler = () => show(false);

  return (
    <div className={frame}>
      <h1 className={header}>Sign Up</h1>
      <Typography className={paragraph}>
        Your username is how other community members will see you.
      </Typography>
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
          type="text"
          className={input}
          color="secondary"
          required={true}
        />
        <Button color="secondary" variant="contained" className={buttonLogIn} type="submit">
          Sign Up
        </Button>
      </form>
      <div className={signIn}>
        <Typography className={paragraph}>Already a Redditloner?</Typography>
        <Button
          color="secondary"
          variant="contained"
          className={buttonSignIn}
          onClick={logInHandler}>
          Log In
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
