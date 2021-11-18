import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: "#7871aa",
    color: "#fff",
    fontWeight: "bold",

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
  addPostButton: {
    backgroundColor: "#a1758b",
  },
  sort: {
    display: "flex",
    alignItems: "flex-end",
    columnGap: "10px",
    "@media (max-width: 680px)": {
      width: "100%",
      justifyContent: "space-between",
    },
    "@media (max-width: 480px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  sortText: {
    fontSize: "20px",
    fontFamily: "Roboto, sans-serif",
    color: "#7a75a1",
    fontWeight: "bold",
  },
  topNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    "@media (max-width: 680px)": {
      alignItems: "center",
      flexDirection: "column",
    },
  },
  searchAndNewPost: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    "@media (max-width: 680px)": {
      marginTop: "20px",
    },
    "@media (max-width: 480px)": {
      marginTop: "20px",
      alignSelf: "end",
    },
  },
  post: {
    marginTop: "25px",
  },
  addPostBtn: {
    backgroundColor: "#42a5f5",
  },

  search: {
    marginLeft: "30px",
    "@media (max-width: 480px)": {
      margin: "0",
    },
  },
  sortNewButton: {
    background: "#dbad81",
  },
  sortWrapper: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: "230px",
  },
}));

export { useStyles };
