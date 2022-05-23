module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(.*(test|spec)).ts?$',
  testEnvironment: 'node',
}
