'use strict';

const path                   = require('path'),
      HTMLPlugin             = require('html-webpack-plugin'),
      { CleanWebpackPlugin } = require('clean-webpack-plugin'),
      MiniCssExtractPlugin   = require('mini-css-extract-plugin');

const PATHS = {
    src: path.join(__dirname, './app/static'),
    build: path.join(__dirname, './app/public')
};

module.exports = {
    entry: [
        `${PATHS.src}/js/index.js`,
        `${PATHS.src}/css/index.css`
    ],
    output: {
        path: path.resolve(__dirname, PATHS.build),
        filename: 'script/script.bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, 
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: './postcss.config.js'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }]
            },
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.html', '.css']
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '/style/style.bundle.css' }),
        new HTMLPlugin({ template: './app/public/index.html' }),
        new CleanWebpackPlugin()
    ]
}