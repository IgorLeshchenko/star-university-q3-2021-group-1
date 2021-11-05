import { makeStyles } from '@material-ui/styles'

const usePostStyles = makeStyles(() => ({
  post: {
    cursor: 'pointer',
    marginTop: '20px',

    '&:hover': {
      borderColor: '#b45100',
      boxShadow: '4px 11px 28px 0px rgba(34, 60, 80, 0.2)',
    },
  },
  arrowUp: {
    color: '#696969',
    transition: '0.3s',

    '&:hover': {
      color: '#FF0000',
    },
  },

  arrowDown: {
    color: '#696969',
    transition: '0.3s',

    '&:hover': {
      color: '#0000CD',
    },
  },

  comments: {
    color: '#696969',
    transition: '0.3s',
  },
}))

export { usePostStyles }
