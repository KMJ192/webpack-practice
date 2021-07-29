const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const config = {
    mode: 'development',
    devServer:{
        open: true,
        overlay: true,
        historyApiFallback: true,
        port: 3000
    },
    plugins: [
        new StyleLintPlugin()
    ]
};

module.exports = merge(common, config)