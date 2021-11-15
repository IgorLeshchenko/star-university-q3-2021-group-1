import React from "react";
import { render, screen } from "@testing-library/react";

import Post from "./Post";

const post = {
  userId: 1001,
  id: 100101,
  title: "Test post",
  body: "Hello world",
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
