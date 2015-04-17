(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('TimeLineCtrl',TimeLineCtrl)

  function TimeLineCtrl() {
      var vm = this;
      vm.main = 'Ola TimeLineCtrl';
    };  
})();