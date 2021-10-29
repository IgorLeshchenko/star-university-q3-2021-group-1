import React from "react";
import { render, screen } from "@testing-library/react";
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from "./App";

test("render hello world", () => {
  render(<App />);
  const helloWorldElement = screen.getByText("Hello World from group 1!!!");
  expect(helloWorldElement).toBeInTheDocument();
});

// test('renders learn react link', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

//   expect(getByText(/learn/i)).toBeInTheDocument();
// });
