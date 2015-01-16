// file: models/publicacao.js - created at 2015-01-16, 12:44
var model = require('seraph-model');

var db = require('./neo');

var publicacao = model(db,'publicacao');

publicacao.schema = {
	ano  : { type : String , required: true},
	tipo : { type : String , required: true},
	formato : { type : String , required: true},
	nome  : { type : String , required: true},
}

module.exports = exports = publicacao;
