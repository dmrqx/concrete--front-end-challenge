module.exports = {
  ...require('./shared'),
  displayName: {
    name: '[Components]',
    color: 'blue'
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.spec.js']
}
