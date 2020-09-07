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

const ButtonsWrapper = (props) => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...props} {...events}>
        Default
      </Button>
      <Button color="primary" {...props} {...events}>
        Primary
      </Button>
      <Button color="danger" {...props} {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>As a link:</p>
    <Toolbar>
      <Button as="a" href="#" {...props} {...events}>
        Default
      </Button>
      <Button as="a" href="#" color="primary" {...props} {...events}>
        Primary
      </Button>
      <Button as="a" href="#" color="danger" {...props} {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled {...props} {...events}>
        Default
      </Button>
      <Button color="primary" disabled {...props} {...events}>
        Primary
      </Button>
      <Button color="danger" disabled {...props} {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const usage = () => <ButtonsWrapper />;

export const outlined = () => <ButtonsWrapper variant="outlined" />;

export const link = () => <ButtonsWrapper variant="link" />;
