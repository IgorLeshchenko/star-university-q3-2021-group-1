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
        <Route path="/star-university-q3-2021-group-1" exact component={MainScreen} />
        <Route path="/star-university-q3-2021-group-1/login" component={LoginScreen} />
        <Route path="/star-university-q3-2021-group-1/addpost" component={AddPost} />
        <Route path="/star-university-q3-2021-group-1/user" component={UserScreen} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
