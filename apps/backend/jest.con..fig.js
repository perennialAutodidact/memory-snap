export default {
  displayName: 'backend',
  rootDir: '.',
  // roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'ts', 'json'],
  testMatch: ['**/__tests__/**/*.[jt]s', '**/?(*.)+(spec|test).[jt]s'],
  // modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    // '^controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^@memory-snap/common/__mocks__/(.*)':
      '<rootDir>/../../packages/common/__mocks__/$1',
    // '^__test__/(.*)$': '<rootDir>/src/__test__/$1',
    // '^__mocks__/(.*)$': '<rootDir>/src/__mocks__/$1',
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
