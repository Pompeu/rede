(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('IndexCrtl',IndexCrtl);

  IndexCrtl.$inject = ['$rootScope'];

  function IndexCrtl($rootScope) {
    var vm = this;
    vm.sair =function() {
      $rootScope.user = null;
    };    
  };
})();