import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import NavBar from "./Navbar";
import { store } from "../../app/store/store";

describe("NavBar", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <NavBar />
        </Router>
      </Provider>,
    );
  });

  it("Check if have logo and link to home page", () => {
    const logoDom = screen.getByAltText(/Reditlone logo/);

    expect(logoDom).toBeInTheDocument();
  });
});
