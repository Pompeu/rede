(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('ProjetosPresquisaController',ProjetosPresquisaController);

  ProjetosPresquisaController.$inject = ['generic',"$log"];

  function ProjetosPresquisaController(generic, $log) {
    var vm = this;
    vm.projetos = []
    vm.areas = areas();

    generic
        .get('projetosdepesquisa')
        .then(success)
        .catch(fail);
    
    function success(p) {
      vm.projetos = p.data.result;
    }
    function fail (err) {
      $log.debug(JSON.stringify(err.statusText))
    }
    function areas () {
      return ['','cienciaa', 'math', 'agraria'];
    }
  } 
})();
