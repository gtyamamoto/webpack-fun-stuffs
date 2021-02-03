
const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env'],
                            // Suporte a js experimental como Class e parametros dentro dela, private,etc..
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'none',
    target: 'browserslist',
    plugins: [
        // plugin para mimificacao/otimizacao dos arquivos gerados
        new TerserWebpackPlugin()
    ]
}