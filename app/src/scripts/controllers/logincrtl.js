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

  DialogController.$inject = ['$log','store','$mdDialog', 'generic' ,'$mdToast' ,'$rootScope', '$http'];
  function DialogController($log,store, $mdDialog, generic ,$mdToast ,$rootScope, $http) {
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
				vm.showCustomToast();
				vm.tryLogin = false;
				vm.cancel();
			}else if(user.data.err){
				$log.debug(user.data);
				$rootScope.err = user.data.err;
				vm.showCustomToast();
			}
		}

		function error (err) {
			$log.debug(err);
			$rootScope.err = err;
			vm.showCustomToast();
		}
    vm.toastPosition = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };
    
    vm.getToastPosition = function() {
      return Object.keys(vm.toastPosition)
        .filter(function(pos) { return vm.toastPosition[pos]; })
        .join(' ');
    };

    vm.showCustomToast = function() {
      $mdToast.show({
        controller: ToastCtrl,
        controllerAs: 'vm',
        templateUrl: '../../partials/tmpl/toastok.tmpl.html',
        hideDelay: 2000,
        position: vm.getToastPosition()
      });
    };    
  }

  ToastCtrl.$inject = ['$mdToast','$rootScope'];
  function ToastCtrl($mdToast,$rootScope) {
    var vm = this;
    vm.err = null;
    
    if($rootScope.user){
      vm.user = $rootScope.user;
    }else{
      vm.err = $rootScope.err;
    }
    vm.closeToast = function() {
      $mdToast.hide();
    };
  }
})();
