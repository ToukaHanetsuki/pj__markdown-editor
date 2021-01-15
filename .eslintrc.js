module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-member-accessibility': [ 'error', { accessibility: 'explicit' } ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': ['error'],
    '@typescript-eslint/no-extra-semi': ['error'],
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    'comma-dangle': 'off',
    'indent': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-extra-semi': 'off',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', {'max': 1}],
    'no-restricted-syntax': [ 'error', 'TSEnumDeclaration', 'ForInStatement', 'ForOfStatement', 'LabeledStatement', 'WithStatement' ],
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'quotes': ['error', 'single'],
    'semi': 'off',
    'semi-spacing': ['error', { after: false, before: false }],
    'semi-style': ['error', 'last'],
    'space-before-function-paren': 'off',
    'space-in-parens': ['error', 'never']
  }
};
