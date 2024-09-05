const js = require('@eslint/js');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const globals = require('globals');
const parser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');

const GLOBALS_BROWSER_FIX = Object.assign({}, globals.browser, {
    AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope '],
});

delete GLOBALS_BROWSER_FIX['AudioWorkletGlobalScope '];

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
    js.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        languageOptions: {
            parser: parser,
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                ...GLOBALS_BROWSER_FIX,
                ...globals.jest,
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            react: reactPlugin,
        },
        rules: {
            // les règles spécifiques ici
            'no-unused-vars': 'warn',
            ...typescriptPlugin.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
        },
    },
    {
        ignores: ['node_modules', 'build'],
    },
];
