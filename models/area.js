// file: models/area.js - created at 2015-01-06, 03:00
'use strict'
var Area = module.exports = function Area(_data) {
  	this.data = _data;
};

Area.prototype.show = function() {
	return console.log(this.data);
};  

Area.calc = function (a , b) {
	return  a + b ;
};