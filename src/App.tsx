import React from "react";
import "./App.css";
import "./components/PostCreation";
// import PostCreation from "./components/PostCreation";
// import Post from "./components/post";
import DisplayAllPosts from "./components/DisplayAllPost";

function App() {
  return (
    <div>
      <DisplayAllPosts />
      {/* <Post /> */}
    </div>
  );
}

export default App;
