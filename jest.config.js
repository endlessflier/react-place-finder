const { createJestConfig } = require('@craco/craco');

const cracoConfig = require('./craco.config.js');
const jestConfig = createJestConfig(cracoConfig);

module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.jsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
