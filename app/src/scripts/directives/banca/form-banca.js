(function(){
  angular.module('RedeApp')
    .directive('btnBanca',btnBanca)
    .controller('PainelBtnCtrl',PainelBtnCtrl)
    .controller('FormBancaCtrl', FormBancaCtrl);

    PainelBtnCtrl.$inject =['$mdDialog'];
    FormBancaCtrl.$inject =['$mdDialog'];

    function btnBanca() {
      return {
        restrict: 'E',
        link: function (scope, iElement, iAttrs) {
          
        },        
        templateUrl: 'js/banca/painel-adm-btn-banca.html',
        controller : PainelBtnCtrl,
        controllerAs : 'banca'
      };
    }

    function PainelBtnCtrl($mdDialog) {
      var banca = this;

      banca.openDialog = function(ev) {
          $mdDialog.show({
          controller: FormBancaCtrl,
          controllerAs: 'fromBanca',
          templateUrl: 'js/banca/form-banca.html',
          targetEvent: ev,
        }); 
      };
    }

    function FormBancaCtrl($mdDialog) {
      var formBanca = this;
      formBanca.banca = {};

      formBanca.salvar = function() {
        alert(JSON.stringify(formBanca.area));
      };

      formBanca.close = function() {
				alert('cancel');
        $mdDialog.cancel();
      };
    }
}());
