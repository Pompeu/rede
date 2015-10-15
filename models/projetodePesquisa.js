// file: models/projetodePesquisa.js - created at 2015-01-13, 01:07
'use strict';

const model = require('seraph-model');
const db = require('./neo');
const projetodePesquisa = model(db,'projetodePesquisa');

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
	anoInicio : { type : Date , required: true},
	anoFim : { type : Date, required: true},
	codigoProtocoloInstituicao  : { type : Number , required: true},
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
