module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-uses-react': ['off'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-shadow': 'off',
    'tailwindcss/no-custom-classname': 0,
  },
  // settings: {
  //   'import/resolver': {
  //     typescript: {},
  //     alias: {
  //       extensions: ['.ts', '.tsx', '.js', '.jsx'],
  //       map: [
  //         ['@/UI', './src/Components/UI/*'],
  //         ['@/Other', './src/components/Other/*'],
  //       ],
  //     },
  //   },
  // },
};
