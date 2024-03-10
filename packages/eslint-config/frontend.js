const { resolve } = require("node:path");
const project = resolve(process.cwd(), "jsconfig.json");

module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  plugins: ["prettier", "react", "unused-imports"],
  extends: ["eslint:recommended"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-console": ["error", { allow: ["warn"] }],
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
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
  settings: {
    react: {
      version: "detect",
    },
  },
};