(function(){
  'use strict';
  angular
    .module('RedeApp')
    .controller('LoginCtrl',LoginCtrl)
    .run(userGlobal)

  userGlobal.$inject = ['$rootScope'];

  function userGlobal ($rootScope) {
    $rootScope.user = null;
    $rootScope.img = 'image/pompeu.jpg';
  }

  LoginCtrl.$inject = ['$mdDialog','$rootScope']

  function LoginCtrl($mdDialog, $rootScope) {

    var vm = this;
    
    vm.showLogin = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        controllerAs: 'vm',
        templateUrl: '../../partials/tmpl/loginform.tmpl.html',
        targetEvent: ev,
      })    
    };
   
  };

  DialogController.$inject = ['$mdDialog', '$http' ,'$mdToast' ,'$rootScope'];

  function DialogController($mdDialog, $http ,$mdToast ,$rootScope) {
    var vm = this;
    vm.XSRF = $rootScope.XSRF;
    vm.cancel = function() {
      $mdDialog.cancel();
      return false;
    };   
    vm.logar = function(user,ev) {
      
      $http.post('/login',user)
      .success(function(user) {
        if(user.status) {
          window.localStorage.setItem('user' , user.result);
          $rootScope.user = user;
          vm.showCustomToast();
          vm.cancel();
        }else if(user.err){
          $rootScope.err = user.err;
          vm.showCustomToast();
          window.location.href = "/";
        }
      })
      .error(function(err) {
        console.log(err);
      })
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
  };
  
  ToastCtrl.$inject = ['$mdToast','$rootScope'];

  function ToastCtrl($mdToast,$rootScope) {
    var vm = this;
    vm.err = null;
    if($rootScope.user){
      vm.user = $rootScope.user.result;
    }else{
      vm.err = $rootScope.err
    }
    vm.closeToast = function() {
      $mdToast.hide();
    };
  };
})();
