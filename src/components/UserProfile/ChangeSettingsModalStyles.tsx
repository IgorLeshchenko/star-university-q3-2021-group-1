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
  overrides: {
    MuiButton: {
      label: {
        color: '#000',
        textTransform: 'initial',
      },
    },
  },
});

export const useStyles = makeStyles({
  change_settings_modal_wrap: {
    textAlign: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: 999999,
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  change_settings_form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#fff7df',
    padding: '40px',
    borderRadius: '15px',
    width: '400px',
  },
  change_settings_title: {
    margin: '0',
  },
  change_settings_form_input: {
    margin: '20px 0',
  },
  change_settings_form_btns: {
    width: '190px',
    padding: '12px 30px',
    // background: 'orange',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },

  cancel_btn: {
    marginLeft: '15px',
  },
});
