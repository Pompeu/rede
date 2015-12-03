// file: models/pesquisador.js - created at 2015-01-07, 06:44
'use strict';
const model = require('seraph-model'),
db = require('./neo'),
Pesquisador = model(db,'Pesquisador'),
validator = require('../plugins/index').validator;

Pesquisador.fields = [
  'nome',
  'telefoneProfissional',
  'telefoneContato',
  'emailProfissional',
  'formacaoNivel',
  'formacaoAno',
  'enderecoProfissional',
  'diretorioPesquisa',
  'externo',
  'instituicao',
  'homePage',
  'facebook'
];

Pesquisador.schema = {
  nome : { type : String, required: true},
  telefoneProfissional : { type : String, match : validator.phone, required: true},
  telefoneContato : { type : String,match : validator.phone, required: true},
  emailProfissional : { type : String,match : validator.email, required: true},
  formacaoNivel : { type : String , required: true  },
  formacaoAno : { type : Date, required: true},
  enderecoProfissional : { type : String, required: true},
  diretorioPesquisa : { type : String, required: true},
  externo : { type : Boolean , required: true},
  instituicao : { type : String, required: true},
  homePage : { type : String, required: true},
  facebook : { type : String, required: true}
};

module.exports = exports = Pesquisador;
