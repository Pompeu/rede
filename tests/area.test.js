// file: tests/grupo.test.js - created at 2015-01-06, 03:56
'use strict';

const expect     = require('chai').expect;
const superagent = require('superagent');
const ch         = require('charlatan');
const url        = require('url');
const baseURL    = 'http://localhost:3000/api/area';

describe('testing Area api restful testing', () => {

  let id = null;

  const body = {
    nomeArea  : ch.Name.name(),
    subCodigo : ch.Helpers.rand(8000,7001),
    subArea   : ch.Name.name(),
    subNivel  : ch.Name.title(),
  };

    it('expect Area create on db', done =>  {

      function endHandler(err , res) {
        expect(err).to.not.exist;
        expect(res).to.exist;   
        expect(res.body.status).to.true;
        expect(res.body.err).to.null;
        expect(res.body.result).to.an('object');
        id = res.body.result.id;
        expect(id).to.an('Number');
        done();
      }

      superagent
      .post(url.resolve(baseURL, 'area'))
      .send(body)
      .end(endHandler);

    });

    it('expect post without body response stats false',done =>  {

      function endHandler(err , res) {
        expect(err).to.not.exist;
        expect(res).to.exist;   
        expect(res.body.status).to.false;
        expect(res.body.err).to.not.null;
        expect(res.body.result.id).to.not.exist;
        done();
      }

      superagent
      .post(url.resolve(baseURL, 'area'))
      .send({})
      .end(endHandler);
    });

    it('expect get one Area by id from db',done =>  {
      function endHandler(err, res) {
        expect(err).to.not.exist;
        expect(res).to.exist;   
        expect(res.body.status).to.true;
        expect(res.body.err).to.null;
        expect(res.body.result).to.an('object');
        expect(res.body.result.id).to.eql(id);      
        done();
      }
      superagent
      .get(url.resolve(baseURL, 'area/'+id))
      .end(endHandler);

    });

    it('expect get all Area from db with len eql 20',done =>  {
      function endHandler(err, res) {
        expect(err).to.not.exist;
        expect(res).to.exist;   
        expect(res.body.status).to.true;
        expect(res.body.err).to.null;
        expect(res.body.result).to.an('Array'); 
        expect(res.body.result.length).to.eql(20);
        done();
      }

      superagent
      .get(url.resolve(baseURL,'area'))
      .end(endHandler);
    });
    it('expect update one Area with id',done =>  {
      const bodyNew = {
        id : id ,
        nomeArea  : ch.Name.name(),
        subCodigo : ch.Helpers.rand(8000, 7001),
        subArea   : ch.Name.name(),
        subNivel  : ch.Name.title()
      };

      function endHandler(err, res) {
        expect(err).to.not.exist;
        expect(res).to.exist;   
        expect(res.body.status).to.true;
        expect(res.body.err).to.null;
        expect(res.body.result).to.an('object');
        expect(res.body.result.id).to.eql(id);
        expect(res.body.result.paginaEdital).to.eql(bodyNew.paginaEdital);
        done();
      }

      superagent
        .put(url.resolve(baseURL,'area/'+id))
        .send(bodyNew)
        .end(endHandler);
    });

    it('expect delete one Area by id form db',done =>  {

      function endHandler (err, res) {
        expect(err).to.not.exist;
        expect(res).to.exist;   
        expect(res.body.status).to.true;
        expect(res.body.err).to.null;
        done();
      }

      superagent
        .del(url.resolve(baseURL,'area/'+id))
        .end(endHandler);

    });
  });
