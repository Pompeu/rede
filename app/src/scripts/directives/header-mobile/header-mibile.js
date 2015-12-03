(function(){
  'use strict';
  angular.module('RedeApp')
  .directive('headerMobile',headerMobile);

  function headerMobile () {
    var directive = {
      restrict: 'E',
      replace : true,
      templateUrl: 'js/header-mobile/header-mobile.html'
    };

    return directive;
  }
}());
