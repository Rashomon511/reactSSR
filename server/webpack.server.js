const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    target: 'node', // 告诉webpack打包的文件是服务器的文件，避免把所有文件全部打包
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['react', 'stage-0', ['env', {
                    targets: {
                        browsers: ['last 2 versions'] // 兼容浏览器最后两个版本
                    }
                }]]
            }
        }]
    }
}