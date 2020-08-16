import React from "react";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";
import styled from "styled-components";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...events}>Default</Button>
      <Button color="primary" {...events}>
        Primary
      </Button>
      <Button color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled {...events}>
        Default
      </Button>
      <Button color="primary" disabled {...events}>
        Primary
      </Button>
      <Button color="danger" disabled {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const outlined = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="outlined" {...events}>
        Default
      </Button>
      <Button variant="outlined" color="primary" {...events}>
        Primary
      </Button>
      <Button variant="outlined" color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="outlined" disabled {...events}>
        Default
      </Button>
      <Button variant="outlined" color="primary" disabled {...events}>
        Primary
      </Button>
      <Button variant="outlined" color="danger" disabled {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const link = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="link" {...events}>
        Default
      </Button>
      <Button variant="link" color="primary" {...events}>
        Primary
      </Button>
      <Button variant="link" color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="link" disabled {...events}>
        Default
      </Button>
      <Button variant="link" color="primary" disabled {...events}>
        Primary
      </Button>
      <Button variant="link" color="danger" disabled {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);
