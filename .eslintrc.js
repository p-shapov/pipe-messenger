module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, jsxSingleQuote: true, printWidth: 100 }],
    'max-len': 1,
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'import/no-unresolved': ['off'],
    'import/no-unused-vars': ['off'],
    'no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '_' }],
    'no-unused-vars': ['warn', { varsIgnorePattern: '_' }],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-shadow': 'error',
    'react/react-in-jsx-scope': ['off'],
    'import/extensions': ['off'],
    'react/jsx-props-no-spreading': ['error', { exceptions: ['App', 'Component'] }],
    'no-use-before-define': ['off'],
    'import/prefer-default-export': ['off'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link', 'a'],
        specialLink: ['to'],
        aspects: ['invalidHref'],
      },
    ],
    'react/jsx-one-expression-per-line': ['off'],
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'never' }],
  },
  overrides: [
    {
      files: ['**/redux/reducers/*.ts'],
      rules: {
        'no-param-reassign': ['error', { props: false }],
      },
    },
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx'],
      },
    },
  },
};
