import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },

  homeButton: {
    marginRight: theme.spacing(2),
    backgroundColor: '#F48023',
    color: '#FFF',

    '&:hover': {
      backgroundColor: '#b45100',
      borderColor: '#b45100',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#b45100',
      borderColor: '#b45100',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #b451008f',
    },
  },

  loginButton: {
    backgroundColor: '#EAEAEA',
    color: '#1682FD',

    '&:hover': {
      backgroundColor: '#cbe3ff',
      borderColor: '#cbe3ff',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#cbe3ff',
      borderColor: '#cbe3ff',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #cbe3ff84',
    },
  },

  logo: {
    maxHeight: '60px',
  },

  logoBtn: {
    padding: 0,
  },
}))

export { useStyles }
