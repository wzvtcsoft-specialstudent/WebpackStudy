const path = require('path');
const {VueLoaderPlugin} =require('vue-loader')
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            //配置vue文件使用的loader
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            //babel用于开发过程中转换es语句
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            //css文件loader
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
            },
        ]
    },
    plugins:[
     new VueLoaderPlugin()
    ]
};