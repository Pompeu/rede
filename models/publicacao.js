// file: models/publicacao.js - created at 2015-01-16, 12:44
'use strict';

var model = require('seraph-model');

var db = require('./neo');

var publicacao = model(db,'publicacao');

publicacao.fields = [
	'ano',  
	'tipo',  
	'formato',
	'name' 
]

publicacao.schema = {
	ano  	: { type : Number , required: true},
	tipo 	: { type : String , required: true},
	formato : { type : String , required: true},
	name  	: { type : String , required: true}
}

module.exports = exports = publicacao;
