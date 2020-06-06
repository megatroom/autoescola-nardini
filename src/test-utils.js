import React from "react";
import ThemeProvider from "styles/ThemeProvider";
import { render } from "@testing-library/react";

const TestProvider = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export * from "@testing-library/react";

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options });

export { customRender as render };
