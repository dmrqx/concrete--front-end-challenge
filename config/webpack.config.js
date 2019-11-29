import merge from 'webpack-merge'

import developmentConfig from './webpack/development'
import productionConfig from './webpack/production'
import sharedConfig from './webpack/shared'

export default () => {
  const isProduction = process.env.npm_lifecycle_event === 'build'
  const currentConfig = isProduction ? productionConfig : developmentConfig

  return merge.smart(sharedConfig, currentConfig)
}
