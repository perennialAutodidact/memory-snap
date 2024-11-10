import { defaults } from 'jest-config'
import path from 'path';

export default {
  ...defaults,
  rootDir: '.',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/src/setupTests.js'],
  // setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  verbose: true,
  transform: {
    '^.+\\.js(x)?$': 'babel-jest',
    // '^.+\\.scss$': path.resolve(path.dirname('.'), '../../node_modules/jest-scss-transform'),
  },
  moduleDirectories: [
    '<rootDir>/node_modules',
    '<rootDir>/src',
    '<rootDir>../../node_modules',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^contexts$': '<rootDir>/src/contexts',
    '^Proptypes$': '<rootDir>/src/Proptypes',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^utils$': '<rootDir>/src/utils',
    '^utils/(.*)$': '<rootDir>/src/utils/$1'
  },
  moduleFileExtensions: ['js', 'jsx', 'scss'],
};
