import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "components/atoms/Container";

const Content = styled.div`
  margin: 40px 0;
`;

const Section = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

Section.defaultProps = {
  children: undefined,
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
