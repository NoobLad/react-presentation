const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = require('./webpack.config');
config.plugins = [
    new HtmlPlugin({
        name: 'index.html',
        template: './src/index.ejs'
    }),
    new webpack.DefinePlugin({
        'PROD': JSON.stringify(false)
    }),
    new webpack.ProvidePlugin({
        'Reveal': 'reveal'
    })
];
module.exports = config;