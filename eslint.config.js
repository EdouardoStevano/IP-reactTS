import js from '@eslint/js';
import * as typescriptPlugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import parser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';

const GLOBALS_BROWSER_FIX = Object.assign({}, globals.browser, {
    AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope '],
});

delete GLOBALS_BROWSER_FIX['AudioWorkletGlobalScope '];

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
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
        ignores: ['node_modules', '**/dist/**', '**/build/**'],
        rules: {
            ...typescriptPlugin.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
        },
    },
    {
        ignores: ['node_modules', 'build'],
    },
];
