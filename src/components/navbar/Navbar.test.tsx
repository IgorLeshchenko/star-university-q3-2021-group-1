import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Navbar";

const links = [
  { testid: "home-route", location: "/star-university-q3-2021-group-1" },
  { testid: "login-route", location: "/star-university-q3-2021-group-1/login" },
];

test.each(links)("Check if Nav Bar have links.", link => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  const linkDom = screen.getByTestId(link.testid);

  expect(linkDom).toBeInTheDocument();
  expect(linkDom).toHaveAttribute("href", link.location);
});

test("Check if have logo and link to home page", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  const logoDom = screen.getByAltText(/Reditlone logo/);

  expect(logoDom).toBeInTheDocument();
});
