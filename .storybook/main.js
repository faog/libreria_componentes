module.exports = {
  stories: ['../src/**/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    return config;
  },
};