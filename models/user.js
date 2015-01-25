// file: models/user.js - created at 2015-01-01, 02:26
'use strict';

var model = require('seraph-model');

var db = require('./neo');

var user = model(db,'User');

var emailEr  = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var passwordEr  = /^\w{8}$/;

user.fields = [
	'name',
	'sname',
	'password',
	'email',
	'dateCadastro'
]

user.schema = {
	name  : { type : String , required: true},
	sname : { type : String , required: true},
	password : { type : String , match: passwordEr , required: true},
	email  : { type : String ,  match: emailEr , required: true},
	dateCadastro : { type : Date , default: Date.now() },
}

module.exports = exports = user;