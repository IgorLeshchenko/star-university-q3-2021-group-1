import { makeStyles } from "@material-ui/styles";


const usePostStyles = makeStyles(() => ({
  post: {
    cursor: "pointer",
    marginTop: "20px",

    "&:hover": {
      borderColor: "#b45100",
      boxShadow: "4px 11px 28px 0px rgba(34, 60, 80, 0.2)",
    },
  },
  arrowUp: {
    color: "#696969",
    transition: "0.3s",

    "&:hover": {
      color: "#FF0000",
    },
  },

  arrowDown: {
    color: "#696969",
    transition: "0.3s",

    "&:hover": {
      color: "#0000CD",
    },
  },

  comments: {
    color: "#696969",
    transition: "0.3s",
  },

  post__Top: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  post__User: {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
  },

  post__BodyAndVote: {
    display: "flex",
  },

  post__Raiting: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "14px",
  },

  post__Title: {
    textAlign: "center",
  },

  post__BodyText: {
    paddingLeft: "40px",
  },

  post__Comments: {
    paddingLeft: "85px",
  },

  post__CommentsBlocks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "15px",
    width: "150px",
    padding: "5px",
    borderRadius: "10px",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "#EAEEF3",
    },
  },
}));

export { usePostStyles };
