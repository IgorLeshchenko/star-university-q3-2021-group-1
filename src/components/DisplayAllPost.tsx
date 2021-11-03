import React, { useState } from "react";
import PostCreation from "./PostCreation";

const DisplayAllPosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const savePostTitleToState = (event: any) => {
    setTitle(event.target.value);
    console.log(title);
  };
  const savePostContentToState = (event: any) => {
    setContent(event.target.value);
    console.log(content);
  };

  return (
    <>
      <PostCreation
        savePostTitleToState={savePostTitleToState}
        savePostContentToState={savePostContentToState}
      />
    </>
  );
};
export default DisplayAllPosts;
