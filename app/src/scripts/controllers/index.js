(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('IndexCrtl',IndexCrtl);

  IndexCrtl.$inject = ['$rootScope', "$window"];

  function IndexCrtl($rootScope , $window) {
    var vm = this;
    vm.sair =function() {
      $rootScope.user = null;
      $window.localStorage.removeItem('user');
      $window.location.reload();
    };    
  };
})();