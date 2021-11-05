import React from "react";
import LoginPage from "../src/screens/login/LoginPage";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Forum from "./components/forum/Forum";

import MainScreen from "./screens/MainScreen";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/" exact component={Forum} />
          <Route path="/login" component={LoginPage} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
