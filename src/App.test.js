import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders correctly", () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
