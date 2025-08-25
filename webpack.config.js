const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
        mode: 'development',
        entry:'./src/index.js',
        devServer: {
            port: 3000,
            open: true
        },
        devtool: 'inline-source-map',
        resolve:{
            extensions: ['.js']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'test-task',
                filename: 'index.html',
                template: path.resolve(__dirname, 'public', 'index.html')
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin()
        ]
    }