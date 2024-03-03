const lintStagedConfig = {
  '*.{js,jsx}': 'yarn lint',
  '*.scss': 'npx stylelint',
};

module.exports = lintStagedConfig;
