import React from "react";
const ModifyPost = () => {
  return (
    <>
      <form>
        <h1>Modify Post</h1>
        <input type="text" placeholder="title" required></input>
        <br />
        <br />
        <textarea placeholder="contents" required></textarea>
        <br />
        <br />
        <button>Update Post</button>
      </form>
    </>
  );
};
export default ModifyPost;
