module.exports = {
    entry: [
        "App/Todo-list/App.js"
    ],
    output: {
        path: __dirname,
        filename: "App/App.js"
    },
    resolve: {
        root: __dirname,
        alias:{
            
        },
        extensions: ["", "js", "jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query:{
                    presets: ["react", "es2015", "stage-0"]
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
