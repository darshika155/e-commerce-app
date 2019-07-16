// var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry : './public/index.js',
    output : {
        path : path.resolve(__dirname , 'build'),
        filename: 'index_bundle.js'
    },
   module : {
        rules : [
            {test : /\.(js|jsx)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:5000/",
    hotOnly: true
  },
  resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.jsx', '.json', '.scss' ,'.less', '.css'],
        unsafeCache: true,
        alias: {
            'react': path.resolve(__dirname, 'node_modules/react/cjs/react.development.js'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom/cjs/react-dom.development.js')
        }
    },
   
mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        })
    ]

}
