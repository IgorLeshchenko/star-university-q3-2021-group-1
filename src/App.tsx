import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainScreen} />
        <Route path="/login" component={LoginScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
