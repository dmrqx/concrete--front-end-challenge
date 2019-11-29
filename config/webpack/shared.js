import { resolve } from 'path'
import config from 'config'
import { DefinePlugin, optimize } from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'extract-css-chunks-webpack-plugin'

console.log(config)

const projectRoot = resolve(__dirname, '../..')
const configDir = resolve(__dirname, '../')
const publicDir = resolve(projectRoot, 'build')

export default {
  target: 'web',
  output: {
    path: publicDir,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]___[sha1:hash:hex:8]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: { path: configDir }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: '@svgr/webpack'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new optimize.ModuleConcatenationPlugin(),
    new DefinePlugin({ CONFIG: JSON.stringify(config) }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name (module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1]
            return `npm.${packageName.replace('@', '')}`
          },
          chunks: 'all'
        },
        styles: {
          test: /\.css$/,
          chunks: 'all'
        }
      }
    }
  }
}
