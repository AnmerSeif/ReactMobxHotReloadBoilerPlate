var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.resolve(__dirname, 'src'); 
var DIST_DIR = path.join(__dirname, 'dist'); 

module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index',
        SRC_DIR + '/sass/main.scss'
    ],

    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
}