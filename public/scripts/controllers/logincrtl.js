(function(){
angular.module('RedeApp')
  .controller('LoginCtrl',['$mdDialog','$rootScope',
    function ($mdDialog, $rootScope) {

    var vm = this;
    
    vm.showLogin = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        controllerAs: 'vm',
        templateUrl: '../../partials/tmpl/loginform.tmpl.html',
        targetEvent: ev,
      })    
    };
   
  }]); 
  function DialogController($mdDialog, $http ,$mdToast ,$rootScope) {
    var vm = this;
    vm.cancel = function() {
      $mdDialog.cancel();
      return false;
    };   
    vm.logar = function(user) {
      $http.post('/login',user)
      .success(function(user) {
        if(user.status) {
          $rootScope.user = user;
          vm.showCustomToast();
          vm.cancel();
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
        hideDelay: 4000,
        position: vm.getToastPosition()
      });
    };    
  };
  function ToastCtrl($mdToast,$rootScope) {
    var vm = this;
    vm.user = $rootScope.user.result;
    vm.closeToast = function() {
      $mdToast.hide();
    };
  };
})();
