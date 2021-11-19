import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { postUser } from "../../app/store/auth/thunks";

import LoginForm from "./components/loginForm";
import SignUpForm from "./components/signUpForm";

import { useStyles, theme } from "./style";

const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { wrapper, imgWrapper, loginPageWrapper } = useStyles();
  const [showLogin, setShowLogin] = useState(true);

  const changeShowLogin = (change: boolean) => {
    if (change) {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  };

  const formSubmissionHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(
      // @ts-ignore
      postUser({ username: e.target[0].value, password: e.target[2].value }),
    );

    history.push("/star-university-q3-2021-group-1");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={loginPageWrapper}>
        <div className={wrapper}>
          {showLogin ? (
            <LoginForm show={changeShowLogin} onSubmit={formSubmissionHandler} />
          ) : (
            <SignUpForm show={changeShowLogin} onSubmit={formSubmissionHandler} />
          )}
          <div className={imgWrapper}></div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LoginScreen;
