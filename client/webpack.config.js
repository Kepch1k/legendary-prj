const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const miniCss = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

htmlPlugin = new HtmlWebpackPlugin({
    "template": "./src/index.html",
    "filename": "./index.html"
});

module.exports = function (env, {mode}) {
    const inDev = mode === 'development';
    return {
        "entry": "./src",
        "output":
            {
                "path":
                    path.resolve(
                        __dirname,
                        "..",
                        "server",
                        "public"
                    ),
                "filename":
                    "bundle.js"
            }
        ,
        optimization: inDev ? {} : {
            minimizer: [
                new TerserPlugin({}),
                new OptimizeCssAssetsPlugin({})
            ]
        },
        "module":
            {
                "rules":
                    [
                        {
                            "test": /\.(js|jsx)/,
                            "exclude": /node_modules/,
                            "use": ["babel-loader"]
                        },
                        {
                            "test": /\.module\.(sass|scss|less)$/,
                            exclude: /\.(css)$/,
                            use: [
                                {
                                    "loader": miniCss.loader
                                },
                                {
                                    loader: 'css-loader',
                                    options: {
                                        modules: true,
                                        sourceMap: true
                                    }
                                },
                                {
                                    loader: "postcss-loader",
                                },
                                {
                                    loader: 'sass-loader',
                                    options: {
                                        sourceMap: true
                                    }
                                },
                            ],
                        },
                        {
                            "test": /\.(sass|scss|less|css)$/,
                            exclude: /\.module\.(sass|scss|less)$/,
                            sideEffects: true,
                            "use": [
                                miniCss.loader,
                                {
                                    loader: 'css-loader',
                                    options: {
                                        modules: true,
                                    }
                                },
                                "postcss-loader",
                                "sass-loader",
                            ]
                        }
                    ]
            }
        ,
        "resolve":
            {
                "extensions":
                    [
                        "*",
                        ".js",
                        ".jsx",
                        ".css",
                        ".scss",
                    ]
            }
        ,
        "plugins":
            [
                new webpack.ProgressPlugin(),
                htmlPlugin,
                new webpack.DefinePlugin({
                    "process.env": JSON.stringify(dotenv.config().parsed) // It will automatically pick up key values from .env file
                }),
                new CopyWebpackPlugin({
                    "patterns": [
                        {
                            "from": "public/images",
                            "to": "images"
                        },
                        {
                            "from": "public/assets",
                            "to": "assets"
                        }
                    ]
                }),
                new ESLintPlugin(),
                // ...(inDev ? [] : [
                //     new miniCss({
                //         filename: '[name].css', // : '[name].[hash].css'
                //         chunkFilename: '[id].css' // : '[id].[hash].css'
                //     })
                // ]),
                new miniCss({
                    filename: '[name].css', // : '[name].[hash].css'
                    chunkFilename: '[id].css' // : '[id].[hash].css'
                }),
                new CleanWebpackPlugin(),
            ],
        "stats":
            "minimal",
        "watch":
            true,
        "watchOptions":
            {
                "aggregateTimeout":
                    300,
                "poll":
                    500
            }
    }
};
