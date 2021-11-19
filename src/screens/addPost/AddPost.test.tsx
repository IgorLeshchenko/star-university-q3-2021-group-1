import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, fireEvent, within } from "@testing-library/react";

import { store } from "../../app/store/store";
import AddPost from "./AddPost";
import Layout from "../../components/layout";

describe("Add post", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <Layout>
            <AddPost />
          </Layout>
        </Router>
      </Provider>,
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
