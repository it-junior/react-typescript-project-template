module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    amd: true,
    node: true,
  },
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["prettier", "typescript-sort-keys"],
  rules: {
    eqeqeq: 0,
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-useless-computed-key": 0,
    "no-unused-vars": 0,
    "no-restricted-globals": ["error"],
    "newline-before-return": "warn",
    "react/prop-types": 0,
    "react/display-name": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
        reservedFirst: ["key", "ref"],
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "typescript-sort-keys/interface": [
      "warn",
      "asc",
      { caseSensitive: true, natural: false, requiredFirst: true },
    ],
    "typescript-sort-keys/string-enum": 0,
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          ["index", "sibling", "parent"],
          "object",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "jsx-a11y/no-autofocus": 0,
  },
};
