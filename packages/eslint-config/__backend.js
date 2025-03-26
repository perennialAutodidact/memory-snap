module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  ignorePatterns: ["node_modules/**", ".turbo/**"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    babelOptions: {},
  },
  plugins: ["prettier", "unused-imports"],
  extends: ["eslint:recommended"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
