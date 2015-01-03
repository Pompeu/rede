(function() {
  'use strict';
  angular.module('AppFooter', ['ngMaterial'] )
    .controller('FooterCrtl', function($scope){
    $scope.numero = 55 * 55;  
    $scope.data = {
      selectedIndex : 0
    };
    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
  })
  .controller('CadCtrl',function($scope,$http){
      $scope.cadUser = function() {
        
      };
  })
  .controller('UserCtrl', function($scope,$http){
    $http.get('/api/user').
      success(function (data) {
        $scope.users = data.result;
        console.log(data)
      }).
      error(function (data,status) {
        $scope.erro = status;
      });
  });
})();
