# Usage

Simply `git clone gh:JonsnowBD/webpack-starter yourappname` to make your app,
then `npm install` all dependencies.

To develop on your new platform, simply run `npm run dev` and it will open
a server at the port 8080.

To build your app minified, simply run `npm run build`

## Technology out of the box

Out of the box you will get:

* [Jquery](https://jquery.com/)
* [The Milligram CSS Framework](https://milligram.github.io/)
* [Lodash](https://lodash.com/)

All ready to go at a low 163kb for the whole shebang.

## Structure

All the folders in `./app/webpack` form your application. They are required from
`./app/webpack/webpack.js` and automatically put into the index.html, no need to
add <scripts> or <links>, just `require("yourthing.css")` or `require("./framework/controller/ng-thing.js")`. It's very easy to jump in and get
work done.
