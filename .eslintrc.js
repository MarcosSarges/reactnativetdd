module.exports = {
  root: true,
  plugins: ['jest', 'detox'],
  extends: ['@react-native-community', 'plugin:jest/recommended'],
  overrides: [
    {
      files: ['*.e2e.js'],
      env: {
        jest: true,
        'detox/detox': true,
        'jest/globals': true,
      },
    },
  ],
};
