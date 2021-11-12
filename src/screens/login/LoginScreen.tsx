import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import { useImageOnLoad } from "../../app/hooks";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/signUpForm";
import loginPic from "../login/pictures/loginPic.jpg";
import { useStyles, theme } from "./style";

const LoginScreen: React.FC = () => {
  const { handleImageOnLoad, css } = useImageOnLoad();
  const { root, wrapper } = useStyles();
  const [showLogin, setShowLogin] = useState(true);
  const history = useHistory();

  const changeShowLogin = (change: boolean) => {
    if (change) {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(`form`, e);

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
