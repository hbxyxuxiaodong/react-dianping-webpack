var path = require('path');
var webpack  = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowerPlugin = require('open-browser-webpack-plugin');
module.exports = {
     entry:path.resolve(__dirname,'app/index.jsx'),
     output:{
         filename:'bundle.js'
     },
     resolve:{
         extensions:['.js','.jsx']//import的文件.js或.jsx 不用写后缀名
     },
     mode:'development',
     module:{
         rules:[
             {
                test:/\.(js|jsx)$/,exclude:/node_modules/,
                use:[
                    {
                       loader:'babel-loader',
                    }
                ]
             },
             {
                 test:/\.scss|css$/,
                 use:[
                     {loader:'style-loader'},
                     {loader:'css-loader'},
                     {loader:'sass-loader'}
                 ]
             }
            //  {test:/\.less$/,exclude:/node_modules/,loader:'style!css!postcss!less'},//！类似于管道的作用，按顺序执行
            //  {test:/\.css$/,exclude:/node_modules/,loader:'style!css!postcss'},//！类似于管道的作用，按顺序执行
            //  {test:/\.(png|gif|jpg|jpeg|bmp)$/i,exclude:/node_modules/,loader:'url-loader?limit=5000'},//限制大小5kb
            //  {test:/\.(png|woff|woff2|svg|tff|eot)()/i,exclude:/node_modules/,loader:'url-loader?limit=5000'}//限制大小5kb
         ]
     },
    //  postcss:[
    //      require('autoprefixer')//调用autoprefixer插件,例如 display:flex,针对不同的浏览器添加css hack
    //  ],
     devtool: 'cheap-module-eval-source-map',
     // this helps to browser to point to the exact file in the console, helps in debug
     plugins:[
         //html 模板插件
         new HtmlWebpackPlugin({
             template:__dirname+'/app/index.tmpl.html'
         }),
         //热加载插件
        //  new webpack.HotModuleReplacementPlugin(),
         //打开浏览器
        //  new OpenBrowerPlugin({
        //      url:'http:localhost:8080'
        //  })
        //  //可在业务 js 代码中使用__DEV__判断是否是dev模式(dev模式下可以提示错误、测试报告等、production模式不提示 )
        //  new webpack.DefinePlugin({
        //      //往前端塞一个全局变量 __DEV__
        //      //webpack.__DEV__可以出来
        //      __DEV__:JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') ||'false'))
        //  }), 
     ],
     devServer:{
        //  colors:true,//终端中输出结果为彩色
        //  historyApiFallback:true,//不跳转，在开发单页应用时非常有用,它依赖于HTML5 history API, 如果设置为true,所有的跳转，将指向index.html 
        //  inline:true,//实时刷新
        //  hot:true //使用热加载插件 HotModuleReplacementPlugin
        // contentBase:'./assets',
        // publishPath:'./assets',
        // historyApiFallback:{
        //     index:'./app/index.html'
        // }
        inline:true,//实时刷新
        host:'127.0.0.1',
        port:4200,
        open:true,//打开浏览器
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public'),//本地服务器所加载的页面所在的目录
        proxy:{
            //凡是 '/api' 开头的http请求，都会被代理到localhost:3000上，实际上后端做了一次转发 ，后端去3000端口拿到数据后，又返回的，这里并不是真正的服务，真正的服务在3000端口上
            //由koa提供模拟数据
            //koa 代码在./mock 目录中,启动命令为 npm run mock
            '/api':{
                target:'http://localhost:3000',
                secure:false
            }
        }
    }
}