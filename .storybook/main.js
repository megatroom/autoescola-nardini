module.exports = {
  stories: [
    "../src/stories/**/*.stories.(js|mdx)",
    "../src/components/**/*.stories.(js|mdx)",
    "../src/styles/**/*.stories.(js|mdx)",
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
  ],
};
