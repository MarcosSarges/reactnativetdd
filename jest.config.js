// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = async () => {
  return {
    verbose: true,
    testRunner: 'jest-circus/runner',
    preset: 'react-native',
    rootDir: './',
  };
};
