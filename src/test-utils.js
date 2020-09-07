import React from "react";
import ThemeProvider from "styles/ThemeProvider";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

const TestProvider = ({ children }) => (
  <Router>
    <ThemeProvider>{children}</ThemeProvider>
  </Router>
);

export * from "@testing-library/react";

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options });

export { customRender as render };
