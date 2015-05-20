(function(){
  angular.module('RedeApp')
    .directive('btnArea',btnArea)
    .controller('PainelBtnCtrl',PainelBtnCtrl)
    .controller('FormAreaCtrl', FormAreaCtrl);

    PainelBtnCtrl.$inject =['$mdDialog'];
    FormAreaCtrl.$inject =['$mdDialog'];

    function btnArea() {
      return {
        restrict: 'E',
        link: function (scope, iElement, iAttrs) {
          
        },        
        templateUrl: '/partials/tmpl/buttons/painel-adm-btn-area.html',
        controller : PainelBtnCtrl,
        controllerAs : 'bc'
      };
    }

    function PainelBtnCtrl($mdDialog) {
      var bc = this;

      bc.createArea = function(ev) {
          $mdDialog.show({
          controller: FormAreaCtrl,
          controllerAs: 'fa',
          templateUrl: '/partials/tmpl/forms/form-area.html',
          targetEvent: ev,
        }); 
      };
    }

    function FormAreaCtrl($mdDialog) {
      var fa = this;
      fa.area = {};

      fa.salvar = function() {
        alert(JSON.stringify(fa.area));
      };

      fa.close = function() {
        $mdDialog.cancel();
      };
    }
}());