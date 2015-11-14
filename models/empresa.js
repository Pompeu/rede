// file: models/empresa.js - created at 2015-01-13, 05:29

const model = require('seraph-model'),
      db = require('./neo'),
      empresa = model(db,'empresa'),
      validator = require('../plugins/validator');

empresa.fields = [
		'nome',
		'telefoneContato',
		'endreco',
		'externo',
		'emailContato',
		'emailProfissional',
		'logomarca',
		'homePage',
];

empresa.schema = { 
		nome : { type : String, required: true},
		telefoneContato : { type : String,match : validator.phone, required: true},
		endreco :{ type : String, required: true},
		externo :{type : Boolean, required: true},
		emailContato :{ type : String, required: true},
		emailProfissional : { type : String, required: true}, 
		logomarca :{ type : String, required: true},
		homePage :{ type : String, required: true},
};


module.exports = exports = empresa;
