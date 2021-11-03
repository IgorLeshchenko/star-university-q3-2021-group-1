import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";
import Navbar from "../Navbar";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "3rem",
    },
  },

  palette: {
    type: "light",
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#EAEAEA",
    },
    error: {
      main: "#F48023",
    },
  },
});

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Paper style={{ minHeight: "100vh" }}>
          <Container>
            <Navbar />
            {children}
          </Container>
        </Paper>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
