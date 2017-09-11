const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const pkg = require('../package.json');
const common = require('./webpack.common.js');
const NO_VENDOR_LIST = ['react-hot-loader'];

const ROOT_PATH = path.resolve(__dirname, '..');

module.exports = merge(common, {
    entry: {
        app: './src/index.js',
        vendor: Object.keys(pkg.dependencies).filter(dep => NO_VENDOR_LIST.indexOf(dep) === -1)
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})
    ],
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(ROOT_PATH, 'dist'),
        publicPath: '/'
    }
});
