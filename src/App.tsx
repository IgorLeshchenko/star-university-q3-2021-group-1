import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginScreen from "./screens/login";
import MainScreen from "./screens/main";
import AddPost from "./screens/addPost";
import UserScreen from "./screens/user";
import NotFound from "./screens/notFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/addpost" component={AddPost} />
        <Route path="/user" component={UserScreen} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
