// file: middlewares/projetoCreateRelArea.js - deld at 2015-05-19, 03:56
'use strict';

function projetoCreateRelAreaHandler(req, res, next) {
  debug('del realation projetos with area middlerware');
  let relId =  req.params.id;
  const projetoPesquisa = models.ProjetodePesquisa;
  res.locals.out = {err : null , result : {} , status : false}; 

  function successHandler() {
    debug('del realation projetos with area successHandler');
    res.locals.out.status = true;
    next();
  }

  function failHandler(err) {
    debug('del realation projetos with area failHandler ');
    res.locals.out.err = err;
    next();
  }

  function delHandler(err) {
    debug('del realation projetos with area  delHandler');
    if(err){
      failHandler(err);
    }else{
      successHandler();
    }
  }
  projetoPesquisa
      .db
      .rel.delete(relId,delHandler)
 }
module.exports = exports = projetoCreateRelAreaHandler;
