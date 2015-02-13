(function() {
  angular.module('AppRede',
    [ 'ngMaterial',
      'ngRoute'
    ])
    .service('name', ['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'index.jade',
          controller: 'IndexCtrl'
        })
    }])
})()