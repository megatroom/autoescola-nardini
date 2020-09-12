import React from "react";
import { render, screen } from "test-utils";

import About from "./About";

beforeEach(() => {
  jest.resetAllMocks();
});

test("renders About page", () => {
  render(<About />);
  expect(screen.getByText("Auto Escola Nardini")).toBeInTheDocument();
});
