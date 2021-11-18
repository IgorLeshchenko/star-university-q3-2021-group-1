import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

// import { useImageOnLoad } from "../../app/hooks";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/signUpForm";
// import loginPic from "../login/pictures/loginPic.jpg";
import { useStyles, theme } from "./style";
// import classes from "./testLoginStyles.Module.css";

const LoginScreen: React.FC = () => {
  // const { handleImageOnLoad, css } = useImageOnLoad();
  const { wrapper, imgWrapper, loginPageWrapper } = useStyles();
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

    history.push("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={loginPageWrapper}>
        <div className={wrapper}>
          {showLogin ? (
            <LoginForm show={changeShowLogin} onSubmit={handleSubmit} />
          ) : (
            <SignUpForm show={changeShowLogin} onSubmit={handleSubmit} />
          )}
          <div className={imgWrapper}></div>
          {/* <div className={imgWrapper} onLoad={handleImageOnLoad} style={{ ...css.fullSize }} /> */}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LoginScreen;
