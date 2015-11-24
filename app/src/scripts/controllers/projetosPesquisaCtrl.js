(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('ProjetosPresquisaController',ProjetosPresquisaController);

  ProjetosPresquisaController.$inject = ['generic','$log'];

  function ProjetosPresquisaController(generic, $log) {
    var vm = this;
    generic
        .get('projetosdepesquisa/area/rel')
        .then(success)
        .catch(fail);
    
    function success(p) {
      vm.projetos = p.data.result;
      vm.areas = vm.projetos
            .map(function(data){ return data.area.nomeArea})
            .filter(function (data, index, self) {
               return self.indexOf(data) === index;
             });
      vm.areas.push('');
    }
    function fail (err) {
      $log.debug(JSON.stringify(err.statusText))
    }
  } 
})();
