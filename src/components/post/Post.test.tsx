import React from "react";
import { render, screen } from "@testing-library/react";

import { IPost } from "./types";
import Post from "./Post";

const post: IPost = {
  _id: "12345",
  body: "Hello world",
  author: "author",
  date: "2021-11-12T19:22:34.167Z",
  level: 1,
  parent: "",
  title: "Test post",
  upvotes: 30,
};

describe("Post", () => {
  render(<Post post={post} />);

  it("User have avatar", () => {
    const avatar = screen.findByAltText("User img");

    expect(avatar).toBeTruthy();
  });

  it("User have name", () => {
    const name = screen.findByTestId("user-name");

    expect(name).toBeTruthy();
    expect(typeof "name").toBe("string");
  });
});
