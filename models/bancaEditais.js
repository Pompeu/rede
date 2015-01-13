// file: models/bancaEditais.js - created at 2015-01-13, 01:19
var model = require('seraph-model');

var db = require('./neo');

var bancaEditais = model(db,'bancaEditais');

bancaEditais.fields = [
		'agencia',
		'dataAbertura',
		'dataEncerramento',
		'paginaEdital'		
]

module.exports = exports = bancaEditais;

