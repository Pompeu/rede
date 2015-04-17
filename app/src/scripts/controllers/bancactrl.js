(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('BancaCtrl',BancaCtrl)

  function BancaCtrl() {
    var vm = this;
    vm.main = 'Ola BancaCtrl';
  };
})();