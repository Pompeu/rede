(function(){
  'use strict';

  angular.module('rc.logout',[])
  .directive('rcLogout', rcLogout);

  function rcLogout () {

    var directive = {
      templateUrl : "js/logout/logout-btn.html",
      restrict : "E",
      controller : Logout,
      controllerAs : 'vm'
    };

    return directive;

  }

  Logout.$inject = ['$rootScope','$window','$mdDialog', '$state' ];

  function Logout ($rootScope, $window, $mdDialog, $state) { 
    var vm = this;
    vm.logout  = function (ev){
      var confirm = $mdDialog.confirm()
      .title('Deseja sair ?')
      .targetEvent(ev)
      .cancel('FICA !!!')
      .ok('sair');

      $mdDialog.show(confirm).then(function() {
        $rootScope.user = null;
        $window.localStorage.removeItem('user');
        $rootScope.$emit('logout:event', false);
        $state.go('index');
      });
    };
  }
})();
