var autoprefixer = require("autoprefixer");
var precss       = require("precss");

module.exports = {
	entry: "./app/webpack/webpack.js",
	output: {
		path: "./app",
		filename: "build.js"
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: "style!css!postcss"},
			{test: /\.less$/, loader:"style!css!postcss!less"},
         {test: /\.scss$/, loader:"style!css!postcss!sass"},
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader:"babel?presets[]=es2015"
         },
		]
	},
   postcss: function(){
      return [autoprefixer, precss]
   }
}
