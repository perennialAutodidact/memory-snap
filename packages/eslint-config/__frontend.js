module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  ignorePatterns: ["build/**", "node_modules/**", ".turbo/**"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    project: true,
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  plugins: ["prettier", "unused-imports"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "react/prop-types": "error",
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
