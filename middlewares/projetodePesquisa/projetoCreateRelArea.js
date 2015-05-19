// file: middlewares/projetoCreateRelArea.js - created at 2015-05-19, 03:56
function projetoCreateRelAreaHandler(req, res, next) {
  // start here with projetoCreateRelArea.js
  'use strict';
  debug('create realation projetos with area middlerware');
  var  rel =  req.body;
  var projetoPesquisa = models.ProjetodePesquisa;

  res.locals.out = {err : null , result : {} , status : false}; 

  function successHandler(result) {
    debug('create realation projetos with area successHandler'+result);
    res.locals.out.result = result;
    res.locals.out.status = true;
    next();
  }

  function failHandler(err) {
    debug('create realation projetos with area failHandler '+err);
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
    'PERTENCE',rel.areaID ,
    { Projeto : "Projeto pertence a Area"},
    createHandler);

}
module.exports = exports = projetoCreateRelAreaHandler;
