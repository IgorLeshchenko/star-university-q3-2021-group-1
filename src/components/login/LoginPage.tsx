import React from "react";
import { useStyles, theme } from "./LoginStyle";
import {ThemeProvider} from "@material-ui/core";
import loginPic from "../login/pictures/loginPic.jpg";
import LoginForm from './LoginForm';
import {useState} from 'react';
import SignUpForm from './SignUpForm';
const LoginPage = () => {
  const classes = useStyles();
  const [showLogin, setShowLogin] = useState(true);

  const changeShowLogin = (change: boolean) => {
      if (change) {
          setShowLogin(false);
      } else {
          setShowLogin(true);
      }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        {showLogin && <LoginForm show={changeShowLogin}/>}
          {!showLogin && <SignUpForm show={changeShowLogin}/>}
        <img src={loginPic} alt="loginPicture" className={classes.wrapper} />
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;
