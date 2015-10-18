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

  DialogController.$inject = ['showToast','$mdDialog', 'generic','$log', '$rootScope'];

  function DialogController(showToast,$mdDialog,generic,$log,$rootScope) {
    var vm = this;
    vm.tryLogin = false;

    vm.cancel = function cancel() {
      $mdDialog.cancel();
      return false;
    };

    vm.criar = function criar(user) {
			vm.tryLogin = true;
      generic
				.post('user',user) 
				.then(success, error);
		}		

		function success(user) {
			if(user.data.status){
				showToast.show();
				$mdDialog.cancel();
			}
		}

		function error(err) {
			vm.tryLogin = false;
			$log.debug(err.status);
			$rootScope.err = err.status == -1? "server is offline" : err;
			showToast.show();
		}
  }
})();
