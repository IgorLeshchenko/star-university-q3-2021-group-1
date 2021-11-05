import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  Button: {
    backgroundColor: "#42a5f5",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#1976d2",
      borderColor: "#fff",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#1565c0",
      borderColor: "#fff",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #cbe3ff84",
    },
  },

  Forum: {
    margin: "0 auto",
    maxWidth: "1000px",
    paddingTop: "100px",
  },

  Forum__TopNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  Forum__Sort: {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
  },

  Forum__SortText: {
    fontSize: "20px",
  },

  Forum__SearchAndNewPost: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
  },
  Forum__Post: {
    marginTop: "25px",
  },
}));

export { useStyles };
