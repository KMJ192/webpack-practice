const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const config = {
    mode: 'development',
    devServer:{
        open: true,
        overlay: true,
        historyApiFallback: true,
        port: 3000
    }
};

module.exports = merge(common, config)