import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

import Navbar from "../navbar";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
    },
  },
  palette: {
    secondary: orange,
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
