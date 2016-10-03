var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        bundle: './index.js',
        vendor: ['jquery'],
        hongbao: './js/hongbao.js'
    },
    output: {
        publicPath: '/',  //html引用路径，在这里是本地地址。
        /*filename: './bundle.js'*/ //打包后的名字
        filename: '[name].js'
    },
    module: {
        loaders:[{
            test: /\.css$/, 
            loader: 'style-loader!css-loader?root=.' 
        },{
            test: /\.js[x]?$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader?presets[]=es2015&presets[]=react' 
        },{
            test: /\.(png|jpg|gif)$/, 
            loader: 'url-loader?limit=8192&name=[path][name].[ext]'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
      ]
}