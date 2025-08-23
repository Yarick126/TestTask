const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.export = (env) => {
    return {
        mode: env.mode ?? 'development',
        entry:'./src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
            ],
        },
        plugin: [
            new HtmlWebpackPlugin({
                title: 'test-task',
                filename: 'index.html',
                template: './src/index.html'
            }),
            new CleanWebpackPlugin(["dist"])
        ]
    }
}