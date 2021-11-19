import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("Not found page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );
  });

  it("Check have imageNotFound", () => {
    const imageNotFound = screen.getByAltText("Not found");

    expect(imageNotFound).toBeInTheDocument();
  });

  it("Check have link to home page", () => {
    const link = screen.getByTestId("link-home");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
