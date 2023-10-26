const lintStagedConfig = {
  '*.{js,jsx}': 'yarn lint --fix',
  '*.scss': 'npx stylelint --fix',
};

module.exports = lintStagedConfig;
