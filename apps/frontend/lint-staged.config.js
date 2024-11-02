const lintStagedConfig = {
  '*.{js,jsx}': 'yarn lint --max-warnings=0',
  '*.scss': 'npx stylelint',
};

module.exports = lintStagedConfig;
