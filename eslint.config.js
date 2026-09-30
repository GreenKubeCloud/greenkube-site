import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  { ignores: ['dist/**', 'node_modules/**', '.astro/**'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,ts,astro}'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
  {
    files: ['src/**/*.{ts,astro}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['*.{js,mjs}', 'scripts/**/*.mjs'],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
