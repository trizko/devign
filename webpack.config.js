var path = require('path');
var webpack = require('webpack');

module.exports = { 
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {   
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: [
                    'babel-preset-es2015',
                    'babel-preset-react'
                ].map(require.resolve)
            }
        }] 
    }
};
