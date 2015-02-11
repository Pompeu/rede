(function() {
  'use strict';
  angular.module('AppRede', ['ngMaterial'] )  
    .controller('FooterCrtl', function($scope){
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
      $scope.cadUser = function(user) {
        $http.post('/api/user', user)
          .success(function(data) {
            console.log(data);
          })
          .error(function(data,status) {
            console.log(status);
          })
      };
  })
  .controller('UserCtrl', function($scope,$http){
    if(!$scope.users){
      $http.get('/api/user').
        success(function (data) {
          $scope.users = data.result;
        }).
        error(function (data,status) {
          $scope.error = status;
        });
    }
  })
  .controller('LoginCrtl', function ($scope, $http) {
    $scope.messege = null;
     $scope.login = function(user) {
        $http.post('/login',user)
          .success(function(data) {
            $scope.messege = data;
          })
          .error(function(data,status) {
            $scope.messege = data;
          })
     };     
  })
  .controller('DashCtrl', ['$scope', function ($scope) {
    
  }])
  .controller('AreaCtrl', ['$scope', function ($scope) {
    $scope.todos = [
      {
        face : '/image/rede.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : '/image/rede.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : '/image/rede.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];
  }])
  .controller('PublicacaoCtrl', ['$scope', '$http', function ($scope , $http) {
    $scope.publicacoes = []
    $http.get('/api/publicacao')
      .success(function(data) {
        $scope.publicacoes = data.result;
      })
      .error(function(err, status) {

      })
  }]);

})();
