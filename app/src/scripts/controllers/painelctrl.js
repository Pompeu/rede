(function(){
  'use strict';
  angular.module('RedeApp')
    .controller('PainelCtrl',PainelCtrl)
    .controller('RightCtrl',RightCtrl);

    PainelCtrl.$inject =['$mdSidenav' ,'$mdUtil'];
    RightCtrl.$inject = ['$mdSidenav'];
    
    function PainelCtrl($mdSidenav , $mdUtil) {
      var vm = this;

      vm.toggleRight = buildNave('right');

      function buildNave(navID) {       
        return  $mdUtil.debounce(function(){
                $mdSidenav(navID)
                  .toggle();
                },300);
      }
  }

  function RightCtrl($mdSidenav) {
    var vm =  this;

    vm.createArea = function() {

    };

    vm.close = function () {
      $mdSidenav('right').close();
    };
  }
    
}());


