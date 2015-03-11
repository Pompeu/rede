(function(){
angular.module('RedeApp')
  .controller('LoginCtrl',['$mdDialog',function ($mdDialog) {
    var vm = this;
    vm.alert = '';
    vm.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        controllerAs: 'vm',
        templateUrl: '../../partials/tmpl/loginform.tmpl.html',
        targetEvent: ev,
      })
      .then(function(answer) {
        vm.alert = 'You said the information was "' + answer + '".';
      }, function() {
        vm.alert = 'You cancelled the dialog.';
      });
    };    
  }]) 
  function DialogController($mdDialog) {
    var vm = this;
    vm.message = {};
    vm.cancel = function() {
      $mdDialog.cancel();
      return false;
    };   
    vm.logar = function(user) {
      console.log(user);
      if(user){
        $mdDialog.cancel();
      }  
    };

  };
})();
