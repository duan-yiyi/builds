const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                APP_ENV: JSON.stringify(process.env.NODE_ENV),
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function() {
                    return [autoprefixer];
                }
            }
        })
    ],
    devtool: (() => {
        if (process.env.NODE_ENV === 'pro') {
            return 'hidden-source-map';
        }
        return 'inline-source-map';
    })(),
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                use: [
                    'eslint-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};
