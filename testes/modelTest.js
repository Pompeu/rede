var expect = require('chai').expect;
var User = require('../models/user');

describe('getOneById()',function() {
	var user = {};
	User().getOneById(44, function (err, _user) {
				user = _user
	});
	
	it('Deve Retornar um User',function() {
		console.log(user);
	});
});





