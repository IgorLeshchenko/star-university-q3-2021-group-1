import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import { authSelector } from "../../app/store/auth/selectors";
import HideOnScroll from "../hideOnScroll";
import logoPng from "./assets/logo.png";
import { useStyles } from "./styles";

const Navbar: React.FC = props => {
  const { root, logoBtn, logo, homeButton, loginButton } = useStyles();
  const { user } = useSelector(authSelector);

  return (
    <HideOnScroll {...props} data-testid="custom-navbar">
      <AppBar color="transparent">
        <Toolbar className={root}>
          <Button className={logoBtn} component={Link} to="/">
            <img src={logoPng} className={logo} alt="Reditlone logo" loading="lazy" />
          </Button>
          {user ? (
            <Button
              variant="contained"
              className={loginButton}
              component={Link}
              to="/user">
              <Typography variant="button">{user}</Typography>
            </Button>
          ) : (
            <div>
              <Button
                variant="contained"
                className={homeButton}
                component={Link}
                data-testid="home-route"
                to="/">
                <Typography variant="button">Home</Typography>
              </Button>
              <Button
                variant="contained"
                className={loginButton}
                component={Link}
                data-testid="login-route"
                to="/login">
                <Typography variant="button">Login</Typography>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
