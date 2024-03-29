const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            config: path.resolve(__dirname, 'postcss.config.js')
        }
    }
}
const isProduction = process.env.NODE_ENV === 'PRODUCTION';

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:/\.js?/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/i,
                oneOf:[
                    {
                        test: /\.module\.s?css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options:{
                                    modules: true
                                }
                            },
                            postcssLoader,
                            'sass-loader'
                        ]
                    },
                    {
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            postcssLoader,
                            'sass-loader'
                        ]
                    }
                ]
            },
            {
                test: /\.hbs$/i,
                use: ['handlebars-loader']
            },
            {
                test: /\.(png|jpe?g|gif|tif?f|raw|bmp)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name() {
                            if(!isProduction){
                                return '[path][name].[ext]';
                            }
                            return '[contenthash].[ext]';
                        },
                        pubilcPath: 'assets/',
                        outputPath: 'assets/'
                    }
                }]
            },
            {
                test: /\.svg$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
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
            minify: isProduction ? {
                collapseWhitespace: true,
                removeScriptTypeAttributes: true,
                useShortDoctype: true
            } : false
        }),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            IS_PRODUCTION: isProduction
        }),
    ]
}