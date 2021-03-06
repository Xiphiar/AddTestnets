const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        main: "./src/main.js",
    },
    output: {
        filename: '[hash].js',
        chunkFilename: '[chunkhash].js',
        path: path.resolve(__dirname,  "dist")
    },
    devServer: {
        port: 8082
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            chunks: ["main"]
        })
    ]
};
