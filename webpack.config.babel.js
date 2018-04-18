/*
* @Author: chenchao
* @Date: 2018-04-18 12:17:23
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-18 14:20:51
*/

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        bundle: './src/app.js'
    },
    devServer: {
        contentBase: './dist' //启用webpack-dev-server所加载的页面所在的目录,因为output配置的是dist
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', //启用webpack-dev-middleware和webpack-hot-middleware时的根目录
    },
    resolve: {
        extensions: ['.js', '.css'], //自动解析确定的扩展
    },
    module: {
        rules: [
            { //模块规则
                test: /\.js[x]?$/, //匹配文件
                exclude: /node_modules/, //排除node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react','stage-0']
                    }                    
                }
            }, {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            }, {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }, {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[sha512:hash:base64:7].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //webpack-dev-server热更新
        //new webpack.NoEmitOnErrorsPlugin(), //webpack-dev-server热更新 // Use NoErrorsPlugin for webpack 1.x
        new HtmlWebpackPlugin({
            title: 'webpack4',
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body'
        }),
        //new CleanWebpackPlugin(['dist']),
        new webpack.ProvidePlugin({  //全局载入的可以调用的组件名称
            React: 'react',
            ReactDOM: 'react-dom',
        })        
    ]
}
