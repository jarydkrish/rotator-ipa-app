module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: 'airbnb',
  parser: '@babel/eslint-parser',
  plugins: [
    'jest',
    'react',
    'react-native',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react/no-unescaped-entities': 0,
    'react/style-prop-object': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'function-paren-newline': ['error', 'consistent'],
    'object-curly-newline': ['error', { consistent: true }],
    'react/destructuring-assignment': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-use-before-define': 0,
  },
};
