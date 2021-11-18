import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import HideOnScroll from "../hideOnScroll";
import logoPng from "./assets/test2-logo.png";
import { useStyles } from "./style";

const Navbar: React.FC = props => {
  const { root, logoBtn, logo, homeButton, loginButton } = useStyles();

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar color="transparent">
          <Toolbar className={root}>
            <Button className={logoBtn} component={Link} to="/">
              <img src={logoPng} className={logo} alt="Reditlone logo" loading="lazy" />
            </Button>
            <div>
              <Button
                variant="contained"
                className={homeButton}
                component={Link}
                data-testid="homeRoute"
                to="/">
                <Typography variant="button">Home</Typography>
              </Button>
              <Button
                variant="contained"
                className={loginButton}
                component={Link}
                data-testid="loginRoute"
                to="/login">
                <Typography variant="button">Login</Typography>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default Navbar;
