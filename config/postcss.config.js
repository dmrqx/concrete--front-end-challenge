module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-preset-env': {
      autoprefixer: { grid: 'autoplace' }
    },
    'postcss-css-variables': {
      preserve: true
    }
  }
}
