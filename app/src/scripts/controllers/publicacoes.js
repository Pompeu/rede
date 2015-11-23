(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('PublicacoesCtrl', PublicacoesCtrl);
  
  PublicacoesCtrl.$inject = ['generic','$rootScope'];

  function PublicacoesCtrl (generic, $rootScope) {
    var vm = this;
    vm.publicacoes = [];
    vm.message = "você deve esta logado para ver as publicações"
    vm.isLoged = false;

    $rootScope.$on('login:event', function (event, data) {
      vm.isLoged = data;
      vm.isLoged ? generic.get('publicacao').then(success,fail): fail();
    });

    $rootScope.$on('logout:event', function(event, data) {
      vm.isLoged = data;
      vm.publicacoes = null;  
    });

    if($rootScope.user){
       generic.get('publicacao').then(success,fail);
    } 

    function success(publicacao) {
      vm.publicacoes = publicacao.data.result;
      vm.message = null;
    }

    function fail (err) {
      vm.message = err.statusCode
    }
  } 
})();
