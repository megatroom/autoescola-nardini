import React from "react";
import { render } from "test-utils";

import Grid from "./Grid";

test("match snapshot with no params", () => {
  const { asFragment } = render(<Grid></Grid>);

  expect(asFragment()).toMatchSnapshot();
});

test("match snapshot with params", () => {
  const { asFragment } = render(<Grid sm={2} md={3} lg={4} xl={5}></Grid>);

  expect(asFragment()).toMatchSnapshot();
});

test("match snapshot with sm and lg", () => {
  const { asFragment } = render(<Grid sm={6} lg={12}></Grid>);

  expect(asFragment()).toMatchSnapshot();
});
