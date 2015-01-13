// file: models/projetodePesquisa.js - created at 2015-01-13, 01:07

var model = require('seraph-model');

var db = require('./neo');

var projetodePesquisa = model(db,'projetodePesquisa');

projetodePesquisa.fields = [
		'nome',
		'anoInicio',
		'anoFim',
		'codigoProtocoloInstituicao',
		'resumo',
		'financiamentoExterno',
		'financiamentoAgencia',
		'financiamentoEntidade',
		'tipoPrograma', 
		'bolsa',
		'bolsaAgencia',
		'bolsaValor',
		'valorFinanciamento',
		'inovacao'		
]

module.exports = exports = projetodePesquisa;
