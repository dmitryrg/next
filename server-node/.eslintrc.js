module.exports = {
  // root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: [
    'prettier',
    'jest'
    // '@babel/plugin-proposal-throw-expressions',
    // '@babel/plugin-syntax-throw-expressions'
  ],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'prettier',
    'plugin:jest/recommended'
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
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
    // 'quotes': ['error', 'single']
    // 'node/no-unsupported-features': ['warn', {version: 8, ignores: ['syntax.asyncAwait']}]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
// "parser": "babel-eslint"
// шлифую editor inspector
// убираем когда ругается на key enter 'hasOwnProperty'. It will display 'Unfiltered for..in loop'
// не нужно когда хочет убрать нужную переменную, например в модели.  'Redundant local variable'
// ругался на style(type="text/css"). убираем Deprecated HTML attribute
// ругался на throw in try Убираем Exception used for local control-f
