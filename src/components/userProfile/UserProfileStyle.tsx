import { makeStyles } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const useStyles = makeStyles({
  user_info_wrap: {
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
  },

  user_name_wrap: {
    fontSize: "25px",
    background: "#dbad81cc",
    borderLeft: "5px solid #d57419",
    padding: "15px",
    marginTop: "20px",
    color: "#4e4040",
    textAlign: "left",
  },

  reputation_wrap: {
    marginTop: "25px",
    background: "#a1758b",
    padding: "15px",
    color: "#fffefee3",
    borderLeft: "5px solid #852153",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
  },

  reputation_score: {
    fontWeight: "bold",
  },
  user_avatar: {
    borderRadius: "50%",
    border: "5px solid #7871aa",
  },

  dragDropTest: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
  },
  dropArea: {
    color: "red",
    width: "400px",
    height: "400px",
    border: "2px dashed #000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  user_posts_number: {
    marginTop: "25px",
    background: "#7871aacf",
    padding: "15px",
    color: "#fffefee3",
    borderLeft: "5px solid #5c4ae1",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
  },
});
