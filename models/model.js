// file: models/model.js - created at 2015-12-01, 07:25
'use strict';
const model = require('seraph-model');
const db = require('./neo');
const slice = Array.prototype.slice;

function modelHandler(fields, schema, name) {
  var args = slice.call(arguments,0,3);

  if(!Array.isArray(fields)) {
    throw new TypeError('fields expect an array');
  }

  if(typeof schema !== 'object'){
    throw new TypeError('schema expect an object');
  }

  if(typeof name !== 'string'){
    throw new TypeError('name expect a string');
  }

  if(name === '') {
    throw new TypeError('name can\'t empty');
  }

  model.fields = fields;
  model.schema = schema;

  return model(db,name);
}

module.exports = exports = modelHandler;
