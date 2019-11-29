const { join } = require('path')
const config = require('config')

const projectRoot = join(__dirname, '../../')
const srcRoot = join(projectRoot, 'src')

module.exports = {
  coverageDirectory: join(projectRoot, 'coverage'),
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/'],
  coverageReporters: ['lcov', 'text'],
  globals: {
    CONFIG: JSON.stringify(config)
  },
  moduleNameMapper: {
    '\\.module.css$': 'identity-obj-proxy'
  },
  rootDir: srcRoot
}
