import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders call to action", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/matricule-se agora/i);
  expect(linkElement).toBeInTheDocument();
});
