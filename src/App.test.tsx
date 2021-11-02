import React from "react";
import { render, screen } from "@testing-library/react";
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import Forum from './components/forum/Forum'

test("render hello world", () => {
  render(<Forum />);
  const helloWorldElement = screen.getByText("sort by:");
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
