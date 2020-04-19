export const BreakpointSizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const breakAt = (size) => `@media (min-width: ${size}px)`;
