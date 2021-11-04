import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(history.location.pathname).toBe("/");
});

test("Rendering a page login", () => {
  const history = createMemoryHistory();

  history.push("/login");
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(history.location.pathname).toBe("/login");
});
