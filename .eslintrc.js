module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "prettier"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
