(function(){
  'use strict';
  angular
    .module('RedeApp')
    .controller('LoginCtrl',LoginCtrl)    
    .run(runConfigs);

  runConfigs.$inject = ['$http','$rootScope', 'store'];
  LoginCtrl.$inject = ['$mdDialog'];  
  DialogController.$inject = ['store','$window','$mdDialog', 'generic' ,'$mdToast' ,'$rootScope', '$http'];
  ToastCtrl.$inject = ['$mdToast','$rootScope'];

  function runConfigs($http ,$rootScope, store) {
    var user = $rootScope.user = store.get('user');
    $rootScope.$on("$locationChangeStart",
      function (event, next, current){
      if(user)
        $http.defaults.headers.common.Authorization = 'Bearer '+user.id_token;
    });
  }

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

  function DialogController(store ,$window, $mdDialog, generic ,$mdToast ,$rootScope, $http) {
    var vm = this;
    vm.tryLogin = false;
    vm.cancel = function() {
      $mdDialog.cancel();
      return false;
    };

    vm.logar = function(user,ev) {
      vm.tryLogin = true;
      generic.post('login',user)
      .success(function(user) {
        if(user.status && user.result) {          
          user.result.img = 'image/pompeu.jpg';
          store.set('user', user.result);
          $rootScope.user =  user.result;
          $http.defaults.headers.common.Authorization = 'Bearer '+user.result.id_token;
          vm.showCustomToast();
          vm.tryLogin = false;
          vm.cancel();
        }else if(user.err){
          $rootScope.err = user.err;
          vm.showCustomToast();
        }
      })
      .error(function(err) {
        console.log(err);
      });
    };
    
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
        hideDelay: 3000,
        position: vm.getToastPosition()
      });
    };    
  }

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