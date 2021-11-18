import React from "react";
import { render, screen, fireEvent, within, RenderResult } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddPost from "./AddPost";

describe("Add post", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <AddPost />
      </BrowserRouter>,
    );

    const title = screen.getByTestId("title");
    const input = within(title).getByRole("textbox");

    const btnSubmit = screen.getByTestId("submit-add");

    title.focus();
    fireEvent.change(input, { target: { value: "mockValue" } });
    fireEvent.click(btnSubmit);
  });

  it("calls the onSubmit method", async () => {
    const title = screen.getByTestId("title");
    const input = within(title).getByRole("textbox");

    await (() => {
      expect(input).toHaveValue("mockValue");
      expect(onSubmit).toBeCalled();
    });
  });

  it("Check title", () => {
    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });
});
