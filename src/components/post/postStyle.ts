import { makeStyles } from "@material-ui/styles";

const usePostStyles = makeStyles(() => ({
  Post: {
    cursor: "pointer",
    marginTop: "20px",

    "&:hover": {
      borderColor: "#b45100",
      boxShadow: "4px 11px 28px 0px rgba(34, 60, 80, 0.2)",
    },
  },
  ArrowUp: {
    color: "#696969",
    transition: "0.3s",

    "&:hover": {
      color: "#FF0000",
    },
  },

  ArrowDown: {
    color: "#696969",
    transition: "0.3s",

    "&:hover": {
      color: "#0000CD",
    },
  },

  Comments: {
    color: "#696969",
    transition: "0.3s",
  },

  Post__Top: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },

  Post__User: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '10px' 
  },

  Post__BodyAndVote: {
    display: 'flex'
  },

  Post__Raiting: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '14px'
  },

  Post__Title:{
    textAlign: 'center'
  },

  Post__BodyText: {
    paddingLeft: '40px'
  },
  
  Post__Comments: {
    paddingLeft: '85px' 
  },

  Post__CommentsBlocks: {
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: '15px',
    width: '150px',
    padding: '5px',
    borderRadius: '10px',
    transition: '0.5s',
    "&:hover": {
      backgroundColor: '#EAEEF3'
    },
  }

}));

export { usePostStyles };
