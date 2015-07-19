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
			{test: /\.vue$/, loader: "vue-loader"}
		]
	}
}