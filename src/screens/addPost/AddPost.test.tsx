import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddPost from "./AddPost";

describe("Add post", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AddPost />
      </BrowserRouter>,
    );
  });

  // it("calls the onSubmit method", () => {
  //   const onSubmit = jest.fn();

  //   const title = screen.getByTestId("title");
  //   const btnSubmit = screen.getByTestId("submit-add");
  //   const inputValue = "Exammple";

  //   // fireEvent.change(title, { value: inputValue });
  //   fireEvent.click(btnSubmit);

  //   // expect(onSubmit).toHaveBeenCalled();
  // });

  it("Check title", () => {
    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });
});
