var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'browser', 'js'); //end the file here or outout
var JS_DIR = path.resolve(__dirname, 'src', 'js'); //start from file here all source

var config = {
  entry: JS_DIR + '/index.jsx', //input file which consist of other jsx and linkw with it
  output: {
    path: BUILD_DIR,
    filename: 'bundle.min.js' //output file 
  },  
  module : {
    loaders : [
      {
        //babel loader
        test : /\.jsx?/, 
        include : JS_DIR,
        loader : 'babel'
      },
      {
        //turns css or sass in javaScript
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  } 

};

module.exports = config;