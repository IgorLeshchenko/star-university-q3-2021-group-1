import { makeStyles } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: orange,
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const useStyles = makeStyles({
  user_settings_btn_wrap: {
    textAlign: "right",
    alignSelf: "end",
  },

  user_settings_btn: {
    width: "53px",
    background: "transparent",
    appearance: "none",
    border: "none",
    cursor: "pointer",
    color: "#625d5d",
    transition: "1s",
    "&:hover": {
      color: "#0c0c0c",
      transition: "1s",
    },
  },
});
