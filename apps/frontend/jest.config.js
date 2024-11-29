export default {
  rootDir: 'src',
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: [
    '<rootDir>/../../../node_modules',
    '<rootDir>/../node_modules',
    '<rootDir>',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '*': '<rootDir>/*',
    '^utils/(.*)$': '<rootDir>/utils/$1',
    '^utils$': '<rootDir>/utils',
    '^components/(.*)$': '<rootDir>/components/$1',
    '^Proptypes$': '<rootDir>/Proptypes',
    '^hooks/(.*)$': '<rootDir>/hooks/$1',
    '^contexts/(.*)$': '<rootDir>/contexts/$1',
    '^contexts$': '<rootDir>/contexts',
    '/.*.scss$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
};
