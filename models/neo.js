function neo() {
	'use strict';
	let config = require('../configs/db')();
	let db = require("seraph")(config);

	return db;
}

module.exports = neo();
