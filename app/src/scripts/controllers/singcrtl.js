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
      });
    };    
  }

  DialogController.$inject = ['$mdDialog', 'generic'];

  function DialogController($mdDialog, generic) {
    var vm = this;
    vm.message = {};

    vm.cancel = function() {
      $mdDialog.cancel();
      return false;
    };

    vm.criar = function(user) {
      generic
				.post('api/user/',user) 
				.then(function sucess(user) {
					console.log(user);
					if(user){
						$mdDialog.cancel();
					}
				},function error(err) {
					console.log(err);
				});
      return false;        
    };
  }
})();
