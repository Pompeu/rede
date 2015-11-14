// file: models/bancaEditais.js - created at 2015-01-13, 01:19

const model = require('seraph-model'),
      db = require('./neo'),
      bancaEditais = model(db,'bancaEditais');

bancaEditais.fields = [
		'agencia',
		'dataAbertura',
		'dataEncerramento',
		'paginaEdital'
];

bancaEditais.schema = { 
		agencia : {type : String, required : true },
		dataAbertura : {type : Date, required : true},
		dataEncerramento : {type : Date, required : true},
		paginaEdital : { type : String, required : true }
};

module.exports = exports = bancaEditais;

