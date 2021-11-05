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
  container: {
    padding: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
