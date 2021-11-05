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
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    
    errorMsg: {
        margin: "0px",
        color: "red"
    },
    userAvatar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translate(-32px, 16px)'
    },
    
    nickname: {
        transform: "translate(5px, 0px)"
    },
    avatar:{
        width: '20px', 
        height: '20px',
    }

});