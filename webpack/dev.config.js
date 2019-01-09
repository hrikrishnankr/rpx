// Define this constant for easier usage
const isProd = process.env.NODE_ENV === 'production'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const { resolve } = require('path')

const config = {
    mode: 'development',
    // Include source maps in development files
    devtool: isProd ? false : '#cheap-module-source-map',

    entry: {
        // Main entry point of our app
        app: resolve(__dirname, '..', 'src', 'main.ts'),
    },

    output: {
        // As mentioned before, built files are stored in dist
        path: resolve(__dirname, '..', 'dist'),

        // In our case we serve assets directly from root
        publicPath: '/',

        // We add hash to filename to avoid caching issues
        filename: '[name].[hash].js',
    },

    resolve: {
        extensions: ['*', '.js', '.ts', '.json'],
        modules: [
            resolve(__dirname, '..', 'node_modules'),
        ],
    },

    module: {
        rules: [{
            test: /\.js|\.ts$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader',
            }),
        },
        {
            test: /\.scss|\.sass$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
            }),
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: 'images/[name].[hash:7].[ext]'
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 1000,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        },
        {
            test: /\.(webm|mp4)$/,
            loader: 'file-loader',
            options: {
                name: 'videos/[name].[hash:7].[ext]'
            }
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'RPX',
            template: resolve(__dirname, '..', 'src', 'index.html'),
        }),
        new ExtractTextPlugin({
            filename: 'style.[hash].css',
            disable: !isProd,
        })
    ],
}

if (!isProd) {
    config.devServer = {
        contentBase: resolve(__dirname, '..', 'static'),
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
        watchOptions: {
            poll: true
        }
    }
} else {
    config.optimization = {
       minimize: false
    }
}

module.exports = config