import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  button: {
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
  sort: {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
  },
  sortText: {
    fontSize: "20px",
  },
  topNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  searchAndNewPost: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
  },
  post: {
    marginTop: "25px",
  },
  addPostBtn: {
    backgroundColor: "#42a5f5",
  },

  search:{
    margin: '0 0 10px 25px',
  }
}));

export { useStyles };
