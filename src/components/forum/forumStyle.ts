import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  
    newButton: {
      backgroundColor: "#F48023",
      color: "#FFF",
  
      "&:hover": {
        backgroundColor: "#b45100",
        borderColor: "#b45100",
        boxShadow: "none",
      },
      "&:active": {
        boxShadow: "none",
        backgroundColor: "#b45100",
        borderColor: "#b45100",
      },
      "&:focus": {
        boxShadow: "0 0 0 0.2rem #b451008f",
      },
    },
  
    addNewPostButton: {
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
  
    title: {
      flexGrow: 1,
    },
  }));

  export {useStyles}
  