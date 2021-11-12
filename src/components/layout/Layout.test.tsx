import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, RenderResult } from "@testing-library/react";

import MainScreen from "../../screens/main/MainScreen";
import { store } from "../../app/store/store";
import Layout from "./Layout";

let documentBody: RenderResult;

describe("Layout", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    documentBody = render(
      <Provider store={store}>
        <Router history={history}>
          <Layout>
            <MainScreen />
          </Layout>
        </Router>
      </Provider>,
    );
  });

  it("Navbar be in page", () => {
    const navbar = documentBody.findByTestId("custom-navbar");

    expect(navbar).toBeTruthy();
  });

  it("has baground color white", done => {
    const root = document.getElementById("root");

    if (root) {
      const style = root.style.backgroundColor;
      expect(style).toEqual("#fff");
    }

    done();
  });
});
