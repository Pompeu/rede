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

    vm.cancel = function cancel() {
      $mdDialog.cancel();
      return false;
    };

    vm.criar = function criar(user) {
      generic
				.post('user',user) 
				.then(success, error);
		}		

		function success(user) {
			if(user){
				$mdDialog.cancel();
				return false;
			}
		}

		function error(err) {
			vm.message = err;
		}
  }
})();
