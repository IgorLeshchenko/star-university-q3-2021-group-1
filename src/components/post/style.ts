import { makeStyles } from "@material-ui/styles";

const usePostStyles = makeStyles(() => ({
  post: {
    cursor: "pointer",
    marginTop: "20px",
    borderRadius: "25px",
    padding: "15px",
    fontFamily: "Roboto, sans-serif",
    position: "relative",
    "&:hover": {
      borderColor: "#b45100",
      boxShadow: "4px 11px 28px 0px rgba(34, 60, 80, 0.2)",
    },
    animation: "$postsAppear 1s ease-out forwards",
  },
  arrowUp: {
    color: "#665cb7",
    transition: "0.3s",

    "&:hover": {
      color: "#FF0000",
    },
  },

  arrowDown: {
    color: "#665cb7",
    transition: "0.3s",

    "&:hover": {
      color: "#0000CD",
    },
  },

  comments: {
    color: "#7a75a1",
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
    color: "#7871aa",
    fontWeight: "bold",
  },

  post__BodyAndVote: {
    display: "flex",
    alignItems: "center",
  },

  post__Raiting: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "14px",
    fontWeight: "bold",
    color: "#665cb7",
  },

  post__Title: {
    textAlign: "left",
    margin: "0 0 0 40px",
    color: "#7a75a1",
    fontSize: "25px",
    letterSpacing: "1px",
  },

  post__BodyText: {
    paddingLeft: "40px",
    lineHeight: "20px",
    fontSize: "15px",
    color: "#3e328f",
  },

  post__Comments: {
    paddingLeft: "85px",
    color: "#7a75a1",
    fontWeight: "bold",
  },

  post__Date: {
    background: "#7871aa",
    color: "#fff",
    padding: "12px",
    right: "-1px",
    position: "absolute",
    borderRadius: "10px 0 0 10px",
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
    color: "#7a75a1",
    "&:hover": {
      backgroundColor: "#EAEEF3",
    },
  },

  "@keyframes postsAppear": {
    from: {
      opacity: "0",
      transform: "translateY(30px)",
    },

    to: {
      opacity: "1",
      transform: "translateY(0)",
    },
  },
}));

export { usePostStyles };
