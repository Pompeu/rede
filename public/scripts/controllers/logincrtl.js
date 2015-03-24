(function(){
angular.module('RedeApp')
  .run(function ($rootScope) {
    $rootScope.user = null;
    $rootScope.img = 'image/pompeu.jpg';
    $rootScope.XSRF = document.cookie.substring(11,47);
  }) 
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
    vm.XSRF = $rootScope.XSRF;
    vm.cancel = function() {
      $mdDialog.cancel();
      return false;
    };   
    vm.logar = function(user,ev) {
      $http.post('/login',user)
      .success(function(user ) {
        console.log(arguments[3].headers['X-XSRF-TOKEN']);
        if(user.status) {
          $rootScope.user = user;
          vm.showCustomToast();
          vm.cancel();
        }else if(user.err){
          $rootScope.err = user.err;
          vm.showCustomToast();
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
