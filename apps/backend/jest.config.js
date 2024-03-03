const config = async () => ({
  setupFilesAfterEnv: ['<rootDir>/__test__/jest.setup.js'],
  transformIgnorePatterns: ['/node_modules/', '/node_modules/(?!pexels)'],
  verbose: true,
  moduleDirectories: ['node_modules', '.'],
  transform: {
    '\\.jsx?$': 'babel-jest',
  },
});

export default config;
