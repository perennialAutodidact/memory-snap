const { defaults } = require('jest-config');

module.exports = {
  ...defaults,
  testEnvironment: 'jsdom',
  verbose: true,
  rootDir: '.',
  transform: {
    '^.+\\.js(x)?$': 'babel-jest',
    '^.+\\.scss$': 'jest-scss-transform',
  },
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/src/__mocks__/jest/styleMock.js',
    // '\\.(css|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx', 'scss'],
  extensionsToTreatAsEsm: ['.jsx'],
};
