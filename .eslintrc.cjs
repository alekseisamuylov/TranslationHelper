module.exports = {
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],

  plugins: ['react'],

  env: {
    browser: true,
    es2021: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },

  overrides: [
    {
      files: ['style.js'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
