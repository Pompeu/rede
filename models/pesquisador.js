// file: models/pesquisador.js - created at 2015-01-07, 06:44
var model = require('seraph-model');

var db = require('./neo');

var Pesquisador = model(db,'Pesquisador');

Pesquisador.fields = [
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
];

module.exports = exports = Pesquisador;
