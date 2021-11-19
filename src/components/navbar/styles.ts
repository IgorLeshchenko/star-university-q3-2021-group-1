import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },

  headerMainWrapper: {
    backgroundColor: "#fff",
  },

  homeButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "#dbad81",
    color: "#FFF",
    "& .MuiButton-label": {
      color: "#fff",
      fontWeight: "bold",

      "& .MuiTypography-button": {
        fontWeight: "bold",
      },

      "&:hover": {
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
  },

  loginButton: {
    backgroundColor: "#7871aa",
    color: "#fff",
    fontWeight: "bold",

    "& .MuiButton-label": {
      color: "#fff",
      fontWeight: "bold",

      "& .MuiTypography-button": {
        fontWeight: "bold",
      },
    },

    "&:hover": {
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
  headerWrapper: {
    maxWidth: "1280px",
    width: "100%",
    margin: "0 auto",
  },
}));

export { useStyles };
