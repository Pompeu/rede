// file: models/area.js - created at 2015-01-15, 02:19

var model = require('seraph-model');

var db = require('./neo');

var area = model(db,'area');

area.schema = {
	nomeArea  : { type : String , required: true},
	subCodigo : { type : Number , min : 1 , max : 9000 , required: true},
	subArea   : { type : String , required: true},
	subNivel  : { type : String , required: true},
}

module.exports = exports = area;
