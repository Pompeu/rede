(function(){
  'use strict';
  angular
    .module('RedeApp')
    .controller('SignCtrl',SignCtrl);

  SignCtrl.$inject = ['$mdDialog'];

  function SignCtrl($mdDialog) {
    var vm = this;

    vm.showSignUp = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        controllerAs: 'vm',
        templateUrl: '../../partials/tmpl/singform.tmpl.html',
        targetEvent: ev,
      })
    };    
  }

  DialogController.$inject = ['$mdDialog', '$http'];

  function DialogController($mdDialog, $http) {
    var vm = this;
    vm.message = {};
    vm.cancel = function() {
      $mdDialog.cancel();
      return false;
    };

    vm.criar = function(user) {
      $http.post('api/user/',user) 
      .success(function(user) {
        console.log(user);
        if(user){
          $mdDialog.cancel();
        }
      })
      .error(function(err) {
        console.log(err);
      });
      return false;        
    };
  };
})();
