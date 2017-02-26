var webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: [
        "script-loader!jquery/dist/jquery.min.js",
        "script-loader!foundation-sites/dist/js/foundation.min.js",
        "./App/App.js"
    ],
    externals: {
        jquery: "jQuery"
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname)
        ],
        alias:{
            
        },
        extensions: [" ", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        })
    ]
};
