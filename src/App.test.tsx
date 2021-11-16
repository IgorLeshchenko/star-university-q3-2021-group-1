import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { store } from "./app/store/store";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );
  });

  it("full app rendering/navigating", () => {
    const history = createMemoryHistory();

    expect(history.location.pathname).toBe("/");
  });

  it("Rendering a page login", () => {
    const history = createMemoryHistory();
    history.push("/star-university-q3-2021-group-1/login");

    expect(history.location.pathname).toBe("/star-university-q3-2021-group-1/login");
  });
});
