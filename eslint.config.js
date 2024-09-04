const js = require("@eslint/js");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const globals = require("globals");
const parser = require("@typescript-eslint/parser");
const reactPlugin = require("eslint-plugin-react");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: parser,
      ecmaVersion: 2020,
      sourceType: "module",
    //   globals:{
    //     ...globals.browser, // Variables globales du navigateur
    //     ...globals.jest, // Variables globales de Jest
    //   },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      react: reactPlugin,
    },
    rules: {
      // Vos règles spécifiques ici
      ...typescriptPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
    },
  },
  {
    ignores: ["node_modules", "build"],
  },
];
