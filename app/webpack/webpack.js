'use strict';
// Libraries
require("milligram");
var $ = require("jquery");
var _ = require("lodash");

// Global-ify Jquery and Lodash Hack-around
window.$ = $;
window.jQuery = $;

window._ = _;

// App Bits!
require("./style/app.less");
require("./script/app.js");
