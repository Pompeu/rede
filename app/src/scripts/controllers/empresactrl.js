(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('EmpresasCtrl', EmpresasCtrl);
  
  function EmpresasCtrl() {
    var vm = this;
    vm.main = 'Ola EmpresasCtrl';
  }
})();
