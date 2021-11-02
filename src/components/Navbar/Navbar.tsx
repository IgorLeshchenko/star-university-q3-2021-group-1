import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useScrollTrigger,
  Slide,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

type Props = {
  children: JSX.Element
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

  title: {
    flexGrow: 1,
  },
}))

const HideOnScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction={'down'} in={!trigger}>
      {children}
    </Slide>
  )
}

const Navbar: React.FC = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography
              variant='h5'
              component='p'
              color='textSecondary'
              className={classes.title}
            >
              Reditlone
            </Typography>

            <>
              <Button
                variant='contained'
                className={classes.homeButton}
                component={Link}
                to='/'
              >
                <Typography variant='button'>Home</Typography>
              </Button>
              <Button
                variant='contained'
                className={classes.loginButton}
                component={Link}
                to='/login'
              >
                <Typography variant='button'>Login</Typography>
              </Button>
            </>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  )
}

export default Navbar
