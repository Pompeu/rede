(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('PublicacoesCtrl', PublicacoesCtrl);
  
  PublicacoesCtrl.$inject = ['generic', '$location'];

  function PublicacoesCtrl (generic,$location) {
    var vm = this;
    vm.publicacoes = [];

    generic.get('publicacao')
      .success(function(publicacao) {
        vm.publicacoes = publicacao.result;
      })
      .error(function(err) {
        $location.url('/');        
      });
  } 
})();
