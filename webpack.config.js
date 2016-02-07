module.exports = {
	entry: "./app/webpack/webpack.js",
	output: {
		path: "./app",
		filename: "build.js"
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: "style!css"},
			{test: /\.less$/, loader:"style!css!less"},
         {test: /\.scss$/, loader:"style!css!sass"},
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader:"babel?presets[]=es2015"
         },
		]
	}
}
