import { makeStyles } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: orange,
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export const useStyles = makeStyles({
  user_info_wrap: {
    textAlign: 'center',
  },

  user_name_wrap: {
    fontSize: '25px',
  },

  reputation_wrap: {
    border: '3px solid orange',
    padding: '10px',
    marginTop: '15px',
  },

  reputation_score: {
    fontWeight: 'bold',
  },
});
