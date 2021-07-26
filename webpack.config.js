const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
         filename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    // {
                    //     loader: 'style-loader',
                    //     options: {
                    //         injectType: 'singletonStyleTag'
                    //     }
                    // },
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack',
            template: './template.hbs',
            meta:{
                viewport: "width=device-width, initial-scale=1.0"
            },
            minify:{
                collapseWhitespace: true,
                removeScriptTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css'
        }),
        new CssMinimizerWebpackPlugin()
    ],
    optimization:{
        runtimeChunk:{
            name: 'runtime'
        },
        splitChunks: {
            cacheGroups:{
                commons:{
                    test: /[\\/]node_modules[\\/]/,
                    name: 'venders',
                    chunks: 'all'
                }
            }
        },
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin()
        ]
    },
    mode: 'none'
}