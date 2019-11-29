const { resolve } = require('path')

const projectRoot = resolve(__dirname)
const srcRoot = resolve(projectRoot, 'src')

module.exports = function babelConfig ({ cache, env }) {
  cache.invalidate(() => process.env.NODE_ENV)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          debug: process.env.BABEL_DEBUG,
          modules: env('test') ? 'commonjs' : 'auto',
          useBuiltIns: 'usage',
          corejs: {
            version: 3,
            proposals: true
          }
        }
      ],
      '@babel/preset-react'
    ],
    plugins: [
      [
        'react-css-modules',
        {
          autoResolveMultipleImports: true,
          exclude: 'node_modules',
          generateScopedName: env('test')
            ? '[local]'
            : '[local]___[sha1:hash:hex:8]',
          webpackHotModuleReloading: env('development')
        }
      ],
      [
        'module-resolver',
        {
          root: srcRoot,
          alias: {
            '@rosey': srcRoot
          }
        }
      ]
    ]
  }
}
