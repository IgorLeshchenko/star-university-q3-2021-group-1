import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Forum from "./components/forum/Forum";

import LoginScreen from "./screens/LoginScreen";
import Layout from "./components/Layout";
import PostCreation from "./components/postcreation/PostCreation";

function App() {
  return (
    <BrowserRouter>
      <PostCreation />
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
