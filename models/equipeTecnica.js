// file: models/publicacao.js - created at 2015-01-16, 12:44
'use strict';

var model = require('seraph-model');

var db = require('./neo');

var EquipeTecnica = model(db,'EquipeTecnica');

EquipeTecnica.fields = [
		'nome',
		'telefoneProfissional',
		'telefoneContato',
		'emailProfissional',
		'formacaoNivel',
		'formacaoAno',
		'enderecoProfissional',
		'diretorioPEsquisa',
		'externo',
		'instituicao',
		'homePage',
		'facebook'
]

module.exports = exports = EquipeTecnica;
