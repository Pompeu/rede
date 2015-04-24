// file: models/empresa.js - created at 2015-01-13, 05:29

var model = require('seraph-model');

var db = require('./neo');

var empresa = model(db,'empresa');

empresa.fields = [
		'nome',
		'telefoneContato',
		'endreco',
		'externo',
		'contato',
		'logomarcar',
		'email',
		'homePage',
		
];

module.exports = exports = empresa;
