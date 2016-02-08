'use strict';
// Libraries
var $ = require("jquery");
var _ = require("lodash");
var tether = require("tether");

// Global-ify Jquery and Lodash Hack-around
window.$ = $;
window.jQuery = $;
window._ = _;
window.Tether = tether;


require("../../node_modules/bootstrap/dist/js/bootstrap.min.js");
require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");

// App Bits!
require("./style/app.less");
require("./script/app.js");
