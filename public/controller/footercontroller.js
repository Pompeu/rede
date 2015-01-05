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
    console.log($scope.users)
    if(!$scope.users){
      $http.get('/api/user').
        success(function (data) {
          $scope.users = data.result;
        }).
        error(function (data,status) {
          $scope.erro = status;
        });
    }
  })
  .controller('LoginCrtl', function ($scope, $http) {
     $scope.login = function(user) {
        $http.post('/login',user)
          .success(function(data) {
            console.log(data)
          })
          .error(function(data) {
            console.log(data)
          })
     };
     
  });
})();
