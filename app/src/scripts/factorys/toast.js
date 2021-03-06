(function () {
  'use strict';

  angular.module('RedeApp')
  .factory('showToast', showToast);

  showToast.$inject = ['$mdToast'];

  function showToast ($mdToast) {
    var toast = $mdToast;

    var service = {
      show : show	
    };

    return service;

    function setPosition () {
      return	{
        bottom: false, 
        top: true,
        left: false,
        right: true
      };
    }

    function getToastPosition () {
      var position = setPosition();
      return Object.keys(position).filter(function (pos){
        return position[pos];
      }).join(' ');
    }

    function show () {
      toast.show({
        controller : ToastCtrl,
        controllerAs : 'vm',
        templateUrl: '../../partials/tmpl/toastok.tmpl.html',
        hideDelay: 2000,
        position: getToastPosition()
      });
    }
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

}());
