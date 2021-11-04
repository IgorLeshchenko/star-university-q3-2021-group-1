import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Forum from "./components/forum/Forum";

import LoginScreen from "./screens/LoginScreen";
// import MainScreen from "./screens/MainScreen";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/" exact component={Forum} />
          <Route path="/login" component={LoginScreen} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
