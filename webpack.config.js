const { resolve } = require('path')
const webpack = require('webpack')

module.exports = env => {
    return { 
        entry: './main.js',
        output: {
            filename: 'bundle.js',
            path: resolve(__dirname, 'dist'),
        },
        context: resolve(__dirname, 'src'),
        module: {   
            loaders: [{
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }] 
        }
    }
};
