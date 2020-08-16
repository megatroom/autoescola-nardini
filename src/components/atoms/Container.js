import PropTypes from "prop-types";
import styled from "styled-components";

import { breakAt, BreakpointSizes } from "styles/Breakpoints";

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSizes.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSizes.lg)} {
    max-width: 1140px;
    margin: 0 auto;
  }
`;

Container.defaultProps = {
  children: undefined,
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
