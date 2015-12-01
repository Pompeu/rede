'use strict';

const config = require('../configs/db')();

module.exports = (() => require("seraph")(config))();

