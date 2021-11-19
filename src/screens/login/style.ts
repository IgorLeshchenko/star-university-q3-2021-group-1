import { makeStyles, createTheme } from "@material-ui/core";
// import { orange } from "@material-ui/core/colors";
import comunityImg from "./pictures/form-img.jpg";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(229, 234, 248)",
    },
    secondary: {
      light: "#7a75a1",
      main: "#7870a8",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  overrides: {
    MuiButton: {
      label: {
        color: "#FFF",
      },
    },
  },
});

// export const MyComponentWithStyles = withStyles(() => ({
//   "@keyframes fadeAnimation": {
//     from: { opacity: 0 },
//     to: { opacity: 1 },
//   },
//   container: {
//     width: "100px",
//     height: "100px",
//     background: "red",
//     animation: "1s fadeAnimation",
//   },
// }))(MyComponent);

export const useStyles = makeStyles({
  wrapper: {
    width: "1000px",
    margin: "100px auto",
    display: "flex",
    background: "#fff7df82",
    overflow: "hidden",
    alignItems: "end",
    borderRadius: "25px",
    position: "relative",
    fontFamily: "Roboto, sans-serif",
    "@media (max-width: 1000px)": {
      width: "500px",
    },
  },

  cornerFigure: {
    width: "160px",
    height: "169px",
    position: "absolute",
    top: "-102px",
    left: "-74px",
    background: "#7870a8",
    borderRadius: "55%",
    transform: "rotateZ(71deg)",
  },

  formWrapper: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    paddingTop: "40px",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 500px)": {
      paddingBottom: "40px",
    },
  },

  formTextWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "320px",
  },

  imgWrapper: {
    width: "500px",
    height: "715px",
    backgroundImage: `linear-gradient(to top, rgb(120 112 168) 0%, rgba(0, 0, 0, 0) 100%), url(${comunityImg})`,
    backgroundPosition: "center",
    "@media (max-width: 1000px)": {
      display: "none",
    },
  },

  heading: {
    color: "#7a75a1",
    textAlign: "center",
  },

  loginPageWrapper: {
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(229, 234, 248);",
  },

  formWrapperForm: {
    display: "flex",
    flexDirection: "column",
  },

  formLabel: {
    fontSize: "16px",
    color: "#7870a8",
    marginTop: "5px",
    display: "block",
  },

  formWrapperFormInput: {
    margin: "5px 0 20px",
    background: "#fff",
    padding: "15px 10px",
    border: "none",
    borderRadius: "15px",
    color: "#000",
    width: "300px",
    "&:focus": {
      outline: "1px solid #7870a8",
      borderColor: "#7870a8",
      backgroundColor: "#d5cbef",
    },
  },

  formWrapperFormButton: {
    marginTop: "20px",
    background: "#7870a8",
    border: "none",
    padding: "10px",
    color: "#fff",
    fontSize: "17px",
    fontWeight: "bold",
    borderRadius: "15px",
    width: "320px",
    "&:hover": {
      background: "#a2768b",
      cursor: "pointer",
    },
    "&:disabled": {
      background: "#b3b3b3",
      cursor: "not-allowed",
      pointerEvents: "all !important",
    },
    "&:disabled:hover": {
      background: "#b3b3b3",
      cursor: "not-allowed",
    },
    "&:disabled:active": {
      background: "#b3b3b3",
      cursor: "not-allowed",
    },
  },

  signUpWrapper: {
    marginTop: "12px",
    width: "100%",
  },

  signUpButtonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  signUpButton: {
    background: "#dbad81",
    border: "none",
    padding: "10px 15px",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "15px",
  },

  signUpButtonHelper: {
    letterSpacing: "2px",
  },

  toAllPostsButton: {
    background: "#a1758b",
    "&:hover": {
      background: "#887ba3",
    },
  },

  textBlock: {
    color: "#9a93b2",
    fontWeight: "bold",
  },

  animationMainWrapper: {
    "@media (max-width: 500px)": {
      display: "none",
    },
  },
  animationWrapper: {
    display: "flex",
    padding: "0",
    alignItems: "center",
    justifyContent: "center",
    margin: "35px 0 0 0",
  },

  animationWrapperItem: {
    listStyle: "none",
    width: "1px",
    height: "100px",
    background: "#0000000f",
    marginRight: "50px",
    position: "relative",
  },

  animationWrapperItemInner: {
    display: "block",
    width: "20px",
    height: "20px",
    background: "#000",
    borderRadius: "50%",
    position: "absolute",
    bottom: "12px",
    right: "-15px",
    animation: "$levitate 3s alternate ease-in-out infinite",
  },

  firstCircle: {
    width: "30px",
    height: "30px",
    bottom: "25px",
    background: "#f2a260",
    animation: "$levitate1 3s alternate ease-in-out infinite",
  },
  secondCircle: {
    width: "20px",
    bottom: "90px",
    right: "-8px",
    backgroundColor: "#dbad81",
    animation: "$levitate2 3s alternate ease-in-out infinite",
  },
  thirdCircle: {
    width: "30px",
    height: "30px",
    bottom: "-5px",
    left: "3px",
    backgroundColor: "#7870a8",
    animation: "$levitate3 3s alternate ease-in-out infinite",
  },
  fourthCircle: {
    width: "15px",
    height: "15px",
    bottom: "77px",
    left: "-7px",
    backgroundColor: "#c5c0b0",
    animation: "$levitate4 3s alternate ease-in-out infinite",
  },
  fifthCircle: {
    width: "18px",
    height: "18px",
    bottom: "50px",
    backgroundColor: "#a1758b",
    animation: "$levitate5 3s alternate ease-in-out infinite",
  },
  sixthCircle: {
    width: "30px",
    height: "30px",
    bottom: "5px",
    backgroundColor: "#f2df96",
    animation: "$levitate6 3s alternate ease-in-out infinite",
  },
  seventhCircle: {
    width: "20px",
    height: "20px",
    bottom: "85px",
    backgroundColor: "#e0d9c6",
    animation: "$levitate7 3s alternate ease-in-out infinite",
  },
  eighthCircle: {
    width: "25px",
    height: "25px",
    bottom: "95px",
    backgroundColor: "#b2add3",
    animation: "$levitate8 3s alternate ease-in-out infinite",
  },
  ninthCircle: {
    width: "15px",
    height: "15px",
    bottom: "40px",
    backgroundColor: "#dbad81",
    animation: "$levitate9 3s alternate ease-in-out infinite",
  },

  logoWrapper: {
    animation: "$logo 3s alternate ease-in-out infinite",
  },

  invalid: {
    outline: "1px solid #b40e0e",
    backgroundColor: "#fddddd",
    animation: "$inputError 0.3s alternate linear",
    "&:focus": {
      outline: "1px solid #ff8800",
      backgroundColor: "#fbe8d2",
    },
  },
  errorMessage: {
    position: "absolute",
    top: "69px",
    color: "red",
    fontSize: "13px",
  },
  inputWrapper: {
    position: "relative",
  },
  test: {
    position: "absolute",
    right: "10px",
    top: "33px",
    zIndex: 10,
  },

  "@keyframes levitate1": {
    "0%": {
      transform: "translate(0, 0)",
    },
    "100%": {
      transform: "translate(0, -55px)",
    },
  },

  "@keyframes levitate2": {
    "0%": {
      transform: "scale(1) translate(0, 0)",
      backgroundColor: "#dbad81",
    },
    "100%": {
      transform: "scale(1.5) translate(0, 35px)",
      backgroundColor: "#a1758b",
    },
  },
  "@keyframes levitate3": {
    "0%": {
      transform: "scale(1) translate(0, 0)",
      backgroundColor: "#7870a8",
    },
    "100%": {
      transform: "scale(0.5) translate(0, -80px)",
      backgroundColor: "#e0d9c6",
    },
  },
  "@keyframes levitate4": {
    "0%": {
      transform: "translate(0, 0) scale(1)",
      backgroundColor: "#c5c0b0",
    },
    "100%": {
      transform: "translate(0, 80px) scale(2)",
      backgroundColor: "#f2df96",
    },
  },
  "@keyframes levitate5": {
    "0%": {
      transform: "translate(0, 0) scale(1)",
      backgroundColor: "#a1758b",
    },
    "100%": {
      transform: "translate(0, 40px) scale(1.7)",
      backgroundColor: "#f2a260",
    },
  },
  "@keyframes levitate6": {
    "0%": {
      transform: "translate(0, 0) scale(1)",
      backgroundColor: "#f2df96",
    },
    "100%": {
      transform: "translate(0, -70px) scale(0.5)",
      backgroundColor: "#dbad81",
    },
  },
  "@keyframes levitate7": {
    "0%": {
      transform: "translate(0, 0) scale(1)",
      backgroundColor: "#e0d9c6",
    },
    "100%": {
      transform: "translate(0, 75px) scale(1.5)",
      backgroundColor: "#dbad81",
    },
  },
  "@keyframes levitate8": {
    "0%": {
      transform: "translate(0, 0) scale(1)",
      backgroundColor: "#b2add3",
    },
    "100%": {
      transform: "translate(0, 65px) scale(0.5)",
      backgroundColor: "#c5c0b0",
    },
  },
  "@keyframes levitate9": {
    "0%": {
      transform: "translate(0, 0) scale(1)",
      backgroundColor: "#dbad81",
    },
    "100%": {
      transform: "translate(0, -50px) scale(2)",
      backgroundColor: "#a1758b",
    },
  },

  "@keyframes logo": {
    "0%": {
      transform: "translate(0, 0)",
    },
    "100%": {
      transform: "translate(0, -10px)",
    },
  },

  "@keyframes inputError": {
    "0%": {
      transform: "translate(0, 0)",
    },
    "25%": {
      transform: "translate(20px, 0)",
    },
    "50%": {
      transform: "translate(-20px, 0)",
    },
    "100%": {
      transform: "translate(0, 0)",
    },
  },
});
