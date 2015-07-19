// Libraries
var Vue = require("./lib/vue.js");
require("./lib/jquery.js");
require("./lib/espalier/main.less");

// Data model
var StarterData = {
	title: "WebPack-Starter"
};

// Componants
var headerModule = require("./componant/header.vue");
headerModule.data = StarterData;

var appModule = require("./componant/app.vue");
appModule.data = StarterData;

// Rest of the application, go wild.
var header = new Vue(headerModule).$mount("#header");
var app = new Vue(appModule).$mount("#app");