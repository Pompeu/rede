(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('PesquisadoresCtrl',PesquisadoresCtrl)

  function PesquisadoresCtrl() {
      var vm = this;
      vm.main = 'Ola PesquisadoresCtrl';
    };  
}());
