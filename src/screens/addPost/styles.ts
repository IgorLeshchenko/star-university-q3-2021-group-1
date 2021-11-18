import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  text: {
    color: "#7870a8",
    fontSize: "1.6rem",
    marginBottom: "1rem",
  },

  button: {
    backgroundColor: "#7870a8",
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

  card: {
    maxWidth: 1280,
    margin: "auto",
    transition: "0.3s",
    borderRadius: "25px",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },

  form: {
    padding: "5rem",
    margin: "auto",
    background: "rgb(229, 234, 248)",
    fontFamily: "Roboto, sans-serif",
    "@media (max-width: 515px)": {
      padding: "2rem",
    },
  },

  textarea: {
    width: "100%",
    height: "100%",
    marginBottom: "2em",
    fontFamily: "Roboto, sans-serif",
    padding: "18.5px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    outlineColor: "#4052B3",
    borderRadius: "4px",
  },

  textfield: {
    marginBottom: "2em",
    width: "100%",
  },
  postCreationWrapper: {
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    backgroundColor: "rgb(229, 234, 248);",
  },
  formInnerWrapper: {
    "@media (max-width: 730px)": {
      margin: "0",
    },
  },
}));

export { useStyles };
