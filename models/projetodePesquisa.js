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
];

projetodePesquisa.schema = {
	nome  : { type : String , required: true},
	anoInicio : { type : String , required: true},
	anoFim : { type : String , required: true},
	codigoProtocoloInstituicao  : { type : String , required: true},
	resumo : { type : String , required: true },
	financiamentoExterno : { type : Boolean , required: true },
	financiamentoAgencia : { type : String },
	financiamentoEntidade : { type : String },
	tipoPrograma : { type : String , required: true },
	bolsa : { type : Boolean },
	bolsaAgencia : { type : String },
	bolsaValor : { type : Number },
	valorFinanciamento : { type : Number  },
	inovacao : { type : Boolean },
};
module.exports = exports = projetodePesquisa;
