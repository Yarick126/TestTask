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
            extensions: ['.js'],
            alias: {
                Assets: path.resolve(__dirname, 'src/assets'),
                UI: path.resolve(__dirname, 'src/components/ui')
            },
            fallback: {
                util: require.resolve("util/"),
                url: require.resolve("url/"),
                stream: require.resolve("stream-browserify"),
                path: require.resolve("path-browserify"),
                assert: require.resolve("assert/"),
                constants: require.resolve("constants-browserify"),
                os: require.resolve("os-browserify/browser"),
                buffer: require.resolve("buffer/"),
                vm: require.resolve("vm-browserify"),
                crypto: require.resolve("crypto-browserify"),
                zlib: require.resolve("browserify-zlib"),
                http: require.resolve("stream-http"),
                https: require.resolve("https-browserify"),
                querystring: require.resolve("querystring-es3"),
                tty: require.resolve("tty-browserify")
            }
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
                    {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
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
        ],

    }