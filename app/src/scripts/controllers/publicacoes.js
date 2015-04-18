(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('PublicacoesCtrl', PublicacoesCtrl)
  
  PublicacoesCtrl.$inject = ['$http'];

  function PublicacoesCtrl ($http) {
    var vm = this;
    vm.publicacoes = [];

    $http.get('/api/publicacao')
      .success(function(publicacao) {
        console.log(publicacao);
      })
      .error(function(err) {
        console.log(err);
      });
  };  
})();
