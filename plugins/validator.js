// file: plugins/validator.js - created at 2015-10-15, 08:44
'use strict';

function validatorHandler () {

	const email =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
				phone = /^\d{10,11}$/,
				cpf = /^\d{11}$/,
				cnpj = /^\d{14}$/

	let validator = {
		email : email,
		phone : phone,
		cpf : cpf,
		cnpj : cnpj
	};

	return  validator; 
	

}

module.exports = exports = validatorHandler();
