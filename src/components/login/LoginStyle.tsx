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
  frame: {
    width: "80%",
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
  button: {
    fontWeight: "bold",
    marginTop: "20px",
  },
  wrapper: {
    backgroundImage: 'url(star-university-q3-2021-group-1/static/media/loginPic.f4fbabf2.jpg)',
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
});
