// file: middlewares/projetoGetAllRelArea.js - created at 2015-11-23, 02:56
'use strict';

const deffer = require('../../plugins/deffer');

function projetoGetAllRelAreaHandler(req, res, next) {
  debug('get all relations projeto and area');

	const projetopesquisa = models.ProjetodePesquisa
      , cypher = `MATCH 
          (projetoPesquisa)- [r:PERTENCE]->(area) 
          RETURN { area : area, projeto : projetoPesquisa, rel : r }`
      , limit = req.params.limit || 20
      , offset = req.params.offset || 0;

  res.locals.out = {err : null , result : [] , status : false};	

  deffer(projetopesquisa.db.query)(cypher)
    .then(successHandler,failHandler);

  function successHandler(result) {
  	debug('get all projetopesquisa success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('get all projetopesquisa fail handler');
  	res.locals.out.err = err;
  	next();
  }
}

module.exports = exports = projetoGetAllRelAreaHandler;
