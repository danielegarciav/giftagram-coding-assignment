/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  rootDir: 'src',
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': 'jest-css-modules',
  },
};
