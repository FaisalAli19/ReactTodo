var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "App") + "/Todo-list/App.js",
    output: {
        path: path.resolve(__dirname, "App"),
        filename: "App.js"
    },
    resolve: {
        root: __dirname,
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query:{
                    presets: ["react", "es2015"]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)/
            },
            {
                test:/\.css$/,
                loader: "style-loader | css-loader"
            }
        ]
    }
};
