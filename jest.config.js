module.exports = {
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.test.ts(x)',
    'src/**/*.spec.ts(x)',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.tsx'
  ],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
};
