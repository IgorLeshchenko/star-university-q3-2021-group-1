import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    height: "80vh",
    position: "relative",
  },

  img: {
    height: "100%",
    position: "absolute",
    top: 0,
  },
}));

export { useStyles };
