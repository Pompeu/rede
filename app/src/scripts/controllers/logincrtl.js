(function(){
  'use strict';
  angular
    .module('RedeApp')
    .controller('LoginCtrl',LoginCtrl);
    
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

  DialogController.$inject = ['store','$window','$mdDialog', 'generic' ,'$mdToast' ,'$rootScope'];

  function DialogController(store ,$window, $mdDialog, generic ,$mdToast ,$rootScope) {
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
          vm.showCustomToast();
          vm.tryLogin = false;
          vm.cancel();
          setTimeout(function() {
            $window.location.reload();
          }, 1000);
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
