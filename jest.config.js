/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.test.ts(x)',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.tsx'
  ]
};
