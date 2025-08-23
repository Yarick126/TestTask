const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
        mode: 'development',
        entry:'./src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader",
                        { 
                            loader: "css-loader",
                            options: {
                                modules: true,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'test-task',
                filename: 'index.html',
                template: path.resolve(__dirname, 'public', 'index.html')
            }),
            new CleanWebpackPlugin()
        ]
    }