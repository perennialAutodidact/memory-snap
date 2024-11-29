import prettier from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupPluginRules } from "@eslint/compat";
import baseConfig from "@memory-snap/eslint-config/backend.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "node_modules/**/*",
      ".turbo/**/*",
      "build/**/*",
      "**/.husky",
      "**/.eslintignore",
      ".github/**/*",
      "**/*.md",
      "**/.prettierignore",
    ],
  },
  ...compat.extends("eslint:recommended"),
  {
    plugins: {
      prettier,
      "unused-imports": fixupPluginRules(unusedImports),
    },

    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },

      parser: babelParser,
      ecmaVersion: 9,
      sourceType: "module",

      parserOptions: {
        requireConfigFile: false,

        ecmaFeatures: {
          jsx: true,
          modules: true,
        },

        babelOptions: {},
      },
    },

    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],

      "no-console": [
        "error",
        {
          allow: ["warn", "error"],
        },
      ],

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
  },
];
