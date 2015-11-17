// file: middlewares/projetoCreateRelArea.js - created at 2015-05-19, 03:56
'use strict';

function projetoCreateRelAreaHandler(req, res, next) {
  debug('create realation projetos with area middlerware');
  let rel =  req.body;
  const projetoPesquisa = models.ProjetodePesquisa;
  res.locals.out = {err : null , result : {} , status : false}; 

  function successHandler(result) {
    debug('create realation projetos with area successHandler');
    res.locals.out.result = result;
    res.locals.out.status = true;
    next();
  }

  function failHandler(err) {
    debug('create realation projetos with area failHandler ');
    res.locals.out.err = err;
    next();
  }

  function createHandler(err, result) {
    debug('create realation projetos with area  createHandler');
    if(!err){
      successHandler(result);
    }else{
      failHandler(err);
    }
  }
 
  projetoPesquisa
    .db
    .relate(rel.projetoID,
      'PERTENCE',rel.areaID,
      { Projeto : "Projeto Pertence a Area"},createHandler);

}
module.exports = exports = projetoCreateRelAreaHandler;
