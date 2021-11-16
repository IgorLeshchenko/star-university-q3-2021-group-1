import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { store } from "./app/store/store";
import App from "./App";

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();

  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
  );

  expect(history.location.pathname).toBe("/");
});

test("Rendering a page login", () => {
  const history = createMemoryHistory();

  history.push("/star-university-q3-2021-group-1/login");

  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
  );

  expect(history.location.pathname).toBe("/star-university-q3-2021-group-1/login");
});
