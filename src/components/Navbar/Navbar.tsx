import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import exampleLogo from "./assets/example.png";

type Props = {
  children: JSX.Element;
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
  },

  homeButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "#F48023",
    color: "#FFF",

    "&:hover": {
      backgroundColor: "#b45100",
      borderColor: "#b45100",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#b45100",
      borderColor: "#b45100",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #b451008f",
    },
  },

  loginButton: {
    backgroundColor: "#EAEAEA",
    color: "#1682FD",

    "&:hover": {
      backgroundColor: "#cbe3ff",
      borderColor: "#cbe3ff",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#cbe3ff",
      borderColor: "#cbe3ff",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #cbe3ff84",
    },
  },

  logo: {
    maxHeight: "60px",
  },

  logoBtn: {
    padding: 0,
  },
}));

const HideOnScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar: React.FC = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.root}>
            <Button className={classes.logoBtn} component={Link} to="/">
              <img
                src={exampleLogo}
                className={classes.logo}
                alt="Reditlone logo"
                loading="lazy"
              />
            </Button>
            <div>
              <Button
                variant="contained"
                className={classes.homeButton}
                component={Link}
                data-testid="homeRoute"
                to="/"
              >
                <Typography variant="button">Home</Typography>
              </Button>
              <Button
                variant="contained"
                className={classes.loginButton}
                component={Link}
                data-testid="loginRoute"
                to="/login"
              >
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
