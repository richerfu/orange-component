/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'svelte3'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/typescript': true,
    'import/resolver': {
      node: { extensions: ['.js', '.svelte', '.ts'] },
      alias: {
        map: [['orange-component', path.join(__dirname, './src')]],
        extensions: ['.ts', '.js', '.svelte', '.json'],
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-mutable-exports': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
