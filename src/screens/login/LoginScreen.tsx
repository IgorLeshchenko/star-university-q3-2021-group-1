import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { useImageOnLoad } from "../../app/hooks";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/signUpForm";
import loginPic from "../login/pictures/loginPic.jpg";
import { useStyles, theme } from "./style";
import { postUser } from "../../app/store/auth/thunks";

const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { handleImageOnLoad, css } = useImageOnLoad();
  const { root, wrapper } = useStyles();
  const [showLogin, setShowLogin] = useState(true);

  const changeShowLogin = (change: boolean) => {
    if (change) {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(
      // @ts-ignore
      postUser({ username: e.target[0].value, password: e.target[2].value }),
    );

    history.push("/star-university-q3-2021-group-1");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={root}>
        {showLogin ? (
          <LoginForm show={changeShowLogin} onSubmit={handleSubmit} />
        ) : (
          <SignUpForm show={changeShowLogin} onSubmit={handleSubmit} />
        )}

        <img
          src={loginPic}
          alt="loginPicture"
          className={wrapper}
          onLoad={handleImageOnLoad}
          style={{ ...css.fullSize }}
        />
      </div>
    </ThemeProvider>
  );
};

export default LoginScreen;
