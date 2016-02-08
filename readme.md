# Usage

Simply `git clone git@github.com:JonSnowbd/Oatmeal.git yourappname` to make your app,
then `npm install` all dependencies.

To develop on your new platform, simply run `npm run dev` and it will open
a server at the port 8080.

To build your app minified, simply run `npm run build`

## Technology out of the box

Out of the box you will get:

* [Jquery](https://jquery.com/)
* [Bootstrap 4.0](http://v4-alpha.getbootstrap.com/getting-started/introduction/)
* [Lodash](https://lodash.com/)

All ready to go at a low 305kb for the whole shebang.

## Structure

All the folders in `./app/src/` form your application. They are required from
`./app/src/webpack.js` and automatically put into the index.html, no need to
add <scripts> or <links>, just `require("yourthing.css")` or `require("./framework/controller/ng-thing.js")`. It's very easy to jump in and get
work done.

Oh, and you don't have to worry about jquery/lodash's scope, it will be in every
script file you require.

I recommend editing just `script/app.js` and `style/app.less`.
