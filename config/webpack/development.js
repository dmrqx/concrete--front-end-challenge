import {
  HotModuleReplacementPlugin,
  NamedModulesPlugin
} from 'webpack'
import MiniCssExtractPlugin from 'extract-css-chunks-webpack-plugin'

export default {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hot: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[name].css'
    })
  ],
  optimization: {
    nodeEnv: 'development'
  },
  devServer: {
    contentBase: 'build',
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    port: 9000
  }
}
