module.exports = {
  // root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: [
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'prettier',
    // 'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier':['warn', {
      'insertPragma': false
    }],
    'no-console': 'off',
    'no-useless-escape': 'off',
    'no-constant-condition': 'off',
    'no-throw-literal': 'off',
    'use-isnan': 'off',
    'no-case-declarations': 'off',
    'no-inner-declarations': 'off',
    'node/no-deprecated-api': 'off',
    'node/no-unpublished-require':'off',
    'object-curly-spacing': ['warn', 'always', {
      'objectsInObjects': true,
      'arraysInObjects': true
      }
    ],
    // 'quotes': ['error', 'single']
    // 'node/no-unsupported-features': ['warn', {version: 8, ignores: ['syntax.asyncAwait']}]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};

