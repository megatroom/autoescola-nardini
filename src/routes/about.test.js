import React from "react";
import { render } from "test-utils";

import About from "./about";

test("scrolls to top in first render", () => {
  render(<About />);
  expect(window.scrollTo).toBeCalledTimes(1);
});
