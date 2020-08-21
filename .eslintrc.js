module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 1,
    'max-len': [
      'warn',
      {
        tabWidth: 2,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  plugins: ['prettier', 'import'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    node: true,
  },
}
