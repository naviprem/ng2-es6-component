var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');


module.exports = {

    entry: {
        "state-list" : './src/state-list.module'
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        loaders: [
            { test: /\.css$/, loader: "raw" },
            { test: /\.scss$/, loaders: ["raw", "sass"] },
            { test: /\.html$/, loader: "html" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    output: {
        path: './',
        filename: 'index.js',
        libraryTarget: "commonjs2",
        library: "Foo"
    },
};