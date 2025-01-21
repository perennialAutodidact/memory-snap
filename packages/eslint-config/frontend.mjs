import prettier from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('eslint:recommended', 'plugin:react/recommended'),
  {
    plugins: {
      prettier,
      'unused-imports': unusedImports,
      'react-refresh': reactRefresh,
    },

    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
        ...globals.browser,
        vi: true,
      },

      parser: babelParser,
      ecmaVersion: 9,
      sourceType: 'module',

      parserOptions: {
        project: true,
        requireConfigFile: false,

        ecmaFeatures: {
          jsx: true,
          modules: true,
        },

        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    files: ['src/**/*.js', 'src/**/*.jsx'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          singleQuote: true,
        },
      ],

      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'error',

      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true },
      ],

      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    ignores: [
      'build/**/*',
      'node_modules/**/*',
      '.turbo/**/*',
      'build/**/*',
      '**/.husky',
      '**/.eslintignore',
      '.github/**/*',
      '**/*.md',
      '**/.prettierignore',
    ],
  },
];
