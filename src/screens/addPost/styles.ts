import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  text: {
    color: "#42a5f5",
    fontFamily: "#42a5f5",
    fontSize: "1.6rem",
  },

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

  card: {
    maxWidth: 500,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },

  form: {
    padding: "5rem",
    width: "50%",
    margin: "auto",
  },

  textarea: {
    width: "380",
    height: "180",
    marginBottom: "2em",
  },

  textfield: {
    marginBottom: "2em",
  },
}));

export { useStyles };
