import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Paper, Container, Box } from "@material-ui/core";
import { Alert } from "@mui/material";
import { orange } from "@material-ui/core/colors";

import { authSelector } from "../../app/store/auth/selectors";
import Navbar from "../navbar";
import Loader from "../loader";

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
  const { loading, error } = useSelector(authSelector);
  return (
    <ThemeProvider theme={theme}>
      {loading && <Loader />}
      {error && (
        <Box py={10}>
          <Alert severity="error">This is an error message!</Alert>
        </Box>
      )}

      <Paper style={{ minHeight: "100vh" }}>
        <Container>
          <Navbar />
          {children}
        </Container>
      </Paper>
    </ThemeProvider>
  );
};

export default Layout;
