const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base.js')

 const serverConfig = {
    mode: 'development',
    target: 'node', // 告诉webpack打包的文件是服务器的文件，避免把所有文件全部打包
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()]
};

module.exports = merge(config, serverConfig)