const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const config = {
    plugins: [
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
    mode: 'production'
};

module.exports = merge(common, config);