(function(){
angular.module('RedeApp')
  .controller('SingCtrl',['$mdDialog',function ($mdDialog) {
    var vm = this;
    vm.showLogin = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        controllerAs: 'vm',
        templateUrl: '../../partials/tmpl/singform.tmpl.html',
        targetEvent: ev,
      })
    };    
  }]) 
  function DialogController($mdDialog, $http) {
    var vm = this;
    vm.message = {};
    vm.cancel = function() {
      $mdDialog.cancel();
      return false;
    };

    vm.criar = function(user) {
      $http.post('api/user/',user) 
      .success(function(user) {
        console.log(user);
        if(user){
          $mdDialog.cancel();
        }
      })
      .error(function(err) {
        console.log(err);
      });
      return false;        
    };
  };
})();
