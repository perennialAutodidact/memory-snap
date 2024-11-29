export default {
  displayName: 'frontend',
  rootDir: '.',
  // roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src',
    '^__mocks__/(.*)': '<rootDir>/src/__mocks__/$1',
    // '^@components/(.*)$': '<rootDir>/apps/frontend/src/components/$1',
    // '^@contexts/(.*)$': '<rootDir>/apps/frontend/src/contexts/$1',
    // '^@hooks/(.*)$': '<rootDir>/apps/frontend/src/hooks/$1',
    // '^@utils/(.*)$': '<rootDir>/apps/frontend/src/utils/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js(x)?$': 'babel-jest',
  },
};
