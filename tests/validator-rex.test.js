// file: tests/validator-rex.test.js - created at 2015-10-15, 08:38
'use strict';

var should = require('chai').should();
const validator = require('../plugins/index').validator;
let ch =  require('charlatan');

describe('validatorRex', function () {
  it('should be valid  an email', function () {
			validator.email.test('ia@net.com').should.be.ok;
			validator.email.test('ia1231net.com').should.be.not.ok;
	});
	it('should be valid a phoneNumber ', () => {
		validator.phone.test('6434441827').should.be.ok;
		validator.phone.test('434441827').should.be.not.ok;
		validator.phone.test('64934441827').should.be.ok;
		validator.phone.test('116434441827').should.be.not.ok;
		validator.phone.test('adD34441827').should.be.not.ok;
	});
	
	it('should be valid an cpf', () => {
		validator.cpf.test('00311920179').should.be.ok;
		validator.cpf.test('a1321313121').should.be.not.ok;
	});

	it('should be valid a cpnj', () => {
		validator.cnpj.test('20031192017912').should.be.ok;
		validator.cnpj.test('a1321313121').should.be.not.ok;
	});
});
