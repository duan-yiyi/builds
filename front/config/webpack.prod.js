const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

const FRONT_ROOT = path.resolve(__dirname, '..');

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: FRONT_ROOT
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(FRONT_ROOT, 'dist'),
        publicPath: '/'
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new UglifyJSPlugin()
    ]
});
