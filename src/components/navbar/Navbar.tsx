import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import HideOnScroll from "../hideOnScroll";
import logoPng from "./assets/logo.png";
import { useStyles } from "./style";

const Navbar: React.FC = props => {
  const { root, logoBtn, logo, homeButton, loginButton } = useStyles();

  return (
    <HideOnScroll {...props} data-testid="custom-navbar">
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
              data-testid="home-route"
              to="/star-university-q3-2021-group-1">
              <Typography variant="button">Home</Typography>
            </Button>
            <Button
              variant="contained"
              className={loginButton}
              component={Link}
              data-testid="login-route"
              to="/star-university-q3-2021-group-1/login">
              <Typography variant="button">Login</Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
