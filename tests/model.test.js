var expect = require('chai').expect;
var should = require('chai').should;

var User = require('../models/user');

describe('user model testing',function() {
	
	var data = {
		name : "Pompeu",
		sname : "Limp",
		password : '552525',
		email : 'itacir@hotmail.com',
		date :  Date.now(),
	}
	
	it('should be User a object',function() {
		var user = new User(data);
		expect(user.name).to.equal(data.name);
		expect(user.sname).to.equal(data.sname);
		expect(user.email).to.equal(data.email);
		expect(user.password).to.equal(data.password);
		expect(user).to.be.an('object');
	});

	it('should be User need 5 atribults',function() {
		var data = {
			nam2 : "Jose",
			sname : "Limp",
			password : '552525',
			email : 'itacir@hotmail.com',
			nam : "Jose",
			date : Date.now(),
		}
		var user = new User(data)
		expect(user).to.be.an.instanceof(User);
		expect(user).to.not.eql(data);
		expect(user).to.be.empty;
	});
	
});





