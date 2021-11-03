import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  
    Button: {
      backgroundColor: "#42a5f5",
      color: "#fff",
  
      "&:hover": {
        backgroundColor: "#1976d2",
        borderColor: "#fff",
        boxShadow: "none",
      },
      "&:active": {
        boxShadow: "none",
        backgroundColor: "#1565c0",
        borderColor: "#fff",
      },
      "&:focus": {
        boxShadow: "0 0 0 0.2rem #cbe3ff84",
      },
    },
  
  }));

  export {useStyles}
  