(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('PublicacoesCtrl', PublicacoesCtrl);
  
  PublicacoesCtrl.$inject = ['generic', '$location' , '$window'];

  function PublicacoesCtrl (generic,$location , $window) {
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
