// file: tests/genericModel.test.js - created at 2015-12-01, 07:22
'use strict';
const expect = require('chai').expect;
const Model = require('../models/index').Model; 

describe('genericModel',  () => {

  let fields, schema, name;

  before('before',() => {
    name = 'person';
    fields = ['name','email'];
    schema = {
      name  : {type : String , required : true},
      email : {type : String, required : true}
    };
  });

  it('should be Model throw TypeError if empty arguments',  () => {
    expect(() => {Model();}).to.throw(TypeError,'fields expect an array');
  });

  it('should be Model throw TypeError with one argument',  () => {
    expect(() => { Model(fields);}).to.throw(TypeError,'schema expect an object');
  });

  it('should be Model throw TypeError with two arguments',  () => {
    expect(() => { Model(fields,schema);}).to.throw(TypeError,'name expect a string');
  });

  it('should be Model have fields,schema and name', () => {
    const model = Model(fields, schema,name);
    expect(model).to.be.an('object');
    expect(model.db).to.be.defined;
    expect(model.db.Seraph).to.be.defined;
  });

  it('should be a Model can\'t accept a empty name', () => {
    expect(() => {Model(fields, schema,'');})
    .to.throw(TypeError,'name can\'t empty');
  });

});
