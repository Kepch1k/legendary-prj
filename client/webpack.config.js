const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin"),

    htmlPlugin = new HtmlWebpackPlugin({
        "template": "./src/index.html",
        "filename": "./index.html"
    });

module.exports = {
    "entry": "./src",
    "output": {
        "path": path.resolve(
            __dirname,
            "..",
            "server",
            "public"
        ),
        "filename": "bundle.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)/,
                "exclude": /node_modules/,
                "use": ["babel-loader"]
            },
            {
                "test": /\.(sass|less|css)$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            }

            /*
             * {
             *     "test": /\.jsx?$/, // Both .js and .jsx
             *     "loader": "eslint-loader",
             *     "include": path.resolve(
             *         process.cwd(),
             *         "src"
             *     ),
             *     "enforce": "pre",
             *     "options": {
             *         "fix": true
             *     }
             * }
             */
        ]
    },
    "resolve": {
        "extensions": [
            "*",
            ".js",
            ".jsx"
        ]
    },
    "plugins": [
        htmlPlugin,
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.config().parsed) // It will automatically pick up key values from .env file
        }),
        new CopyWebpackPlugin({
            "patterns": [
                {
                    "from": "src/images",
                    "to": "images"
                }
            ]
        }),
        new ESLintPlugin()
    ],
    "stats": "minimal",
    "watch": true,
    "watchOptions": {
        "aggregateTimeout": 300,
        "poll": 500
    }
};
