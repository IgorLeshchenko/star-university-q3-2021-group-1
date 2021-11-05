import { makeStyles, createMuiTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: orange,
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  overrides: {
    MuiButton: {
      label: {
        color: "#FFF",
      },
    },
  },
});

export const useStyles = makeStyles({
  root: {
    height: "980px",
    display: "flex",
    flexDirection: "row",
  },
  frame: {
    width: "40%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    height: "28px",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.05em",
    textTransform: "capitalize",
    margin: "20px 0px",
  },
  paragraph: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "20px",
    letterSpacing: "0.05em",
  },
  input: {
    width: "380px",
    height: "42px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  buttonLogIn: {
    fontWeight: "bold",
    marginTop: "20px",
  },
  wrapper: {
    height: "100%",
    width: "60%",
  },
  signIn: {
    display: "flex",
    flexDirection: "row",
    margin: "100px",
    justifyContent: "center",
  },
  buttonSignIn: {
    height: "30px",
    fontSize: "17px",
    fontWeight: "bold",
    margin: "0px 0px 0px 20px",
    width: "170px",
  },
});
