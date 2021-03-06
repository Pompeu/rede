// file: models/area.js - created at 2015-01-15, 02:19
'use strict';

const model = require('seraph-model');
const db    = require('./neo');
const area  = model(db,'area');

area.fildes = [
  'nomeArea' ,
  'subCodigo',
  'subArea'  ,
  'subNivel' 
];

area.schema = {
  nomeArea  : { type : String , required: true},
  subCodigo : { type : Number , min : 1 , max : 9000 , required: true},
  subArea   : { type : String , required: true},
  subNivel  : { type : String , required: true}
};

module.exports = exports = area;
