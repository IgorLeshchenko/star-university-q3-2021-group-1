import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import API from "../../app/api/index";
import { authSelector } from "../../app/store/auth/selectors";
import HideOnScroll from "../hideOnScroll";
import logoPng from "./assets/test2-logo.png";
import { useStyles } from "./styles";

const Navbar: React.FC = props => {
  const { root, logoBtn, logo, homeButton, loginButton } = useStyles();
  const { user } = useSelector(authSelector);
  const history = useHistory();

  const handleLogout = () => {
    API.UserRequest.logoutUser();
    history.push("/login");
  };

  return (
    <HideOnScroll {...props} data-testid="custom-navbar">
      <AppBar color="transparent">
        <Toolbar className={root}>
          <Button className={logoBtn} component={Link} to="/">
            <img src={logoPng} className={logo} alt="Reditlone logo" loading="lazy" />
          </Button>
          {user ? (
            <div>
              <Button variant="contained" className={homeButton} component={Link} to="/user">
                <Typography variant="button">{user}</Typography>
              </Button>

              <Button variant="contained" onClick={handleLogout} className={loginButton}>
                <Typography variant="button">Logout</Typography>
              </Button>
            </div>
          ) : (
            <Button
              variant="contained"
              className={loginButton}
              component={Link}
              data-testid="login-route"
              to="/login">
              <Typography variant="button">Login</Typography>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
