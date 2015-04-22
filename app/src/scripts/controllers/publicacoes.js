(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('PublicacoesCtrl', PublicacoesCtrl)
  
  PublicacoesCtrl.$inject = ['$http' , '$location'];

  function PublicacoesCtrl ($http , $location) {
    var vm = this;
    vm.publicacoes = [];

    $http.get('http://localhost:3000/api/publicacao')
      .success(function(publicacao) {
        vm.publicacoes = publicacao.result;
      })
      .error(function(err) {
        $location.url('/');        
      });
  };  
})();
