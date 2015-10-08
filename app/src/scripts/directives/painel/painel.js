(function(){
  'use strict';
  angular.module('RedeApp')
  .directive('painelAdm',painelAdm )
  .controller('PainelBtnCtrl',PainelBtnCtrl)
  .controller('MenuCtrl',MenuCtrl);

  PainelBtnCtrl.$inject =['$mdDialog'];
  MenuCtrl.$inject =['$mdDialog'];

  function painelAdm() {
    return {
      restrict: 'E',
      replace: 'true',
      link: function (scope, iElement, iAttrs) {

      },
      templateUrl: 'js/painel/painel-adm-btn.html',
      controller : PainelBtnCtrl,
      controllerAs : 'vm'
    };
  }  

  function PainelBtnCtrl($mdDialog) {
    var vm = this;
 
    vm.showMenu = function(ev) {
      $mdDialog.show({
        controller: MenuCtrl,
        controllerAs: 'mc',
        templateUrl: 'js/painel/painel-adm.html',
        targetEvent: ev,
      });    
    };
  }  

  function MenuCtrl ($mdDialog) {
    var mc = this;
    mc.close = function() {
      $mdDialog.cancel();
    };
  }

}());
