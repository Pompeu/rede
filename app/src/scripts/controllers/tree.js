'use strict';

(function(){
  angular
    .module('tree',['ui.tree'])
    .controller('TreeController', TreeController);

  TreeController.$inject = ['$scope'];

  function TreeController ($scope) {
  }
})();
