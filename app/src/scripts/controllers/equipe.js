(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('EquipeCtrl',EquipeCtrl);

  function EquipeCtrl() {
      var vm = this;
      vm.main = 'Ola EquipeCtrl';
    }  
})();
