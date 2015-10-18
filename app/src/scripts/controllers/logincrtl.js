(function(){
  'use strict';
  angular
    .module('RedeApp')
    .controller('LoginCtrl',LoginCtrl)    
    .run(runConfigs);

  runConfigs.$inject = ['$http','$rootScope', 'store'];

  function runConfigs($http ,$rootScope, store) {
    var user = $rootScope.user = store.get('user');
    $rootScope.$on("$locationChangeStart",
      function (event, next, current){
      if(user)
        $http.defaults.headers.common.Authorization = 'Bearer '+user.id_token;
    });
  }

  LoginCtrl.$inject = ['$mdDialog'];  

  function LoginCtrl ($mdDialog) {
    var vm = this;    
    vm.showLogin = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        controllerAs: 'vm',
        templateUrl: '../../partials/tmpl/loginform.tmpl.html',
        targetEvent: ev,
      });    
    };
  }

  DialogController.$inject = ['showToast','$log','store','$mdDialog','generic','$rootScope','$http'];
  function DialogController(showToast,$log,store,$mdDialog,generic,$rootScope,$http) {
    var vm = this;
    vm.tryLogin = false;
    vm.cancel = function() {
      $mdDialog.cancel();
    };

    vm.logar = function(user) {
      vm.tryLogin = true;
      generic.post('login',user)
				.then(success,error);
		};

		function success (user) {
			$log.debug(user);
			if(user.data.status && user.data.result) {
				user.data.result.img = 'image/pompeu.jpg';
				store.set('user', user.data.result);
				$rootScope.user =  user.data.result;
				$http.defaults.headers.common.Authorization = 'Bearer '+user.data.result.id_token;
				showToast.show();
				vm.tryLogin = false;
				vm.cancel();
			}else if(user.data.err){
				vm.tryLogin = false;
				$log.debug(user.data);
				$rootScope.err = user.data.err;
				showToast.show();
			}
		}

		function error (err) {
			vm.tryLogin = false;
			$log.debug(err.status);
			$rootScope.err = err.status == -1? "server is offline" : err;
			showToast.show();
		}
       
  }

})();
