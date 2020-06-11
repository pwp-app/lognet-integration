const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const entry = './src/index.js';

module.exports = {
    target: 'web',
    mode: 'production',
    entry: {
        'lognet': entry,
        'lognet.min': entry,
    },
    output: {
        path: path.resolve(__dirname, '/dist/'),
        filename: '[name].js',
        library: 'lognet',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules|node/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: false,
    optimization: {
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/
            })
        ]
    }
};