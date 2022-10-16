/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: 'ts-jest',
  clearMocks: true,
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/index.ts',
  ],
  coverageDirectory: "__tests__/coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  testMatch: [
    '<rootDir>/__tests__/**/*.test.ts?(x)',
  ],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
