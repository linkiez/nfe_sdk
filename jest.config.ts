import type { Config } from 'jest';

const config: Config = {
  collectCoverageFrom: ['tools/**/*.ts', 'tests/**/*.ts'],
  extensionsToTreatAsEsm: ['.ts'],
  passWithNoTests: true,
  roots: ['<rootDir>/tests'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
        useESM: true,
      },
    ],
  },
};

export default config;