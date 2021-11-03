import { makeStyles } from "@material-ui/styles";

const usePostStyles = makeStyles(() => ({
  
    post: {
      cursor: "pointer",
  
      "&:hover": {
        borderColor: "#b45100",
        boxShadow: "4px 11px 28px 0px rgba(34, 60, 80, 0.2)",
      },
    },
  }));

  export {usePostStyles}