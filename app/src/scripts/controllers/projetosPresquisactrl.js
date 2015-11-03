(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('ProjetosPresquisaController',ProjetosPresquisaController);

  ProjetosPresquisaController.$inject = ['generic'];

  function ProjetosPresquisaController(generic) {
    var vm = this;
    vm.projetos = []

    generic.get('projetosdepesquisa').then(success);
    
    function success(p) {
      vm.projetos = p.data.result;
    }
  } 
})();
