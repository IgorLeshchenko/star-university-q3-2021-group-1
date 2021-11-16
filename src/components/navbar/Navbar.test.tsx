import React from "react";
import { render, RenderResult, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import NavBar from "./Navbar";
import { store } from "../../app/store/store";

const links = [
  { testid: "home-route", location: "/star-university-q3-2021-group-1" },
  { testid: "login-route", location: "/star-university-q3-2021-group-1/login" },
];

let documentBody: RenderResult;

describe("NavBar", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    documentBody = render(
      <Provider store={store}>
        <Router history={history}>
          <NavBar />
        </Router>
      </Provider>,
    );
  });

  test.each(links)("Check if Nav Bar have links.", link => {
    const linkDom = screen.getByTestId(link.testid);

    expect(linkDom).toBeInTheDocument();
    expect(linkDom).toHaveAttribute("href", link.location);
  });

  it("Check if have logo and link to home page", () => {
    const logoDom = screen.getByAltText(/Reditlone logo/);

    expect(logoDom).toBeInTheDocument();
  });
});
