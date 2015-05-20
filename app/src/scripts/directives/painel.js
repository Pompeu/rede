(function(){
  'use strict';
  angular.module('RedeApp')
  .directive('painelAdm',painelAdm )
  .controller('PainelBtnCtrl',PainelBtnCtrl)
  .controller('MenuCtrl',MenuCtrl);

  function painelAdm() {
    return {
      restrict: 'E',
      replace: 'true',
      link: function (scope, iElement, iAttrs) {

      },
      templateUrl: '../partials/painel-adm-btn.html',
      controller : PainelBtnCtrl,
      controllerAs : 'vm'
    };
  }

  PainelBtnCtrl.$inject =['$mdDialog'];

  function PainelBtnCtrl($mdDialog) {
    var vm = this;
 
    vm.showMenu = function(ev) {
      $mdDialog.show({
        controller: MenuCtrl,
        controllerAs: 'vm',
        templateUrl: '../../partials/painel-adm.html',
        targetEvent: ev,
      });    
    };
  } 

  MenuCtrl.$inject =['$mdDialog'];

  function MenuCtrl($mdDialog) {
     var vm = this;

     vm.close = function() {
      $mdDialog.cancel();
      return false;
    };
  }

}());