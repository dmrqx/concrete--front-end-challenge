import { HashedModuleIdsPlugin } from 'webpack'
import MiniCssExtractPlugin from 'extract-css-chunks-webpack-plugin'

export default {
  mode: 'production',
  output: {
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[id].[name].[chunkhash:8].js'
  },
  plugins: [
    new HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename:
        'css/[name].[contenthash].css'
    })
  ],
  optimization: {
    nodeEnv: 'production'
  }
}
