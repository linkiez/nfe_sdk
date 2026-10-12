import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      '.venv/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '.xsd2ts-work/**',
      '**/*.min.js',
      'eslint.config.mjs',
      'jest.config.ts',
      'src/**',
      'xsd/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['tools/**/*.ts', 'tests/**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.jest,
        ...globals.node,
      },
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      '@typescript-eslint/no-confusing-void-expression': 'off',
    },
  },
  {
    files: ['examples/**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['tools/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
];
