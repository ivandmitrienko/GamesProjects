const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin'); // for partialls
const CopyPlugin = require("copy-webpack-plugin");// for copy folders

let htmlPageNames = ['services', 'technologies', 'products', 'products'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        template: `./src/${name}.ejs`, // relative path to the HTML files
        filename: `${name}.html`, // output HTML files
    })
});

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.[contenthash:8].js',
        assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.ejs$/i,
                use: ['html-loader', 'template-ejs-loader'],

            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.join('icons', '[name][ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: path.join('fonts', '[name].[contenthash][ext]'),
                },
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
              { from: "src/images/servicesIcons", to: "icons"},
              { from: "src/images/technologiesIcons", to: "icons"},
            ],
          }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.ejs'),
            filename: 'index.html',
        }),
        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: ['dist'],
                },
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
        }),
        new ExtraWatchWebpackPlugin({
            dirs: path.resolve(__dirname, 'src'),
        }),
    ].concat(multipleHtmlPlugins),
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 3000,
    },
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            ['svgo', { name: 'preset-default' }],
                        ],
                    },
                },
            }),
        ],
    },
};