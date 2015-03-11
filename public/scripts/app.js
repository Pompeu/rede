(function() {
  'use strict';
  angular.module('RedeApp', ['ngRoute','ngMaterial'] )
  .config(['$routeProvider','$mdThemingProvider',
  function($routeProvider , $mdThemingProvider) {
    $routeProvider
      .when('/logar', {
        templateUrl: '../partials/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'       
      })
      .when('/signin', {
        templateUrl: '../partials/signin.html',
        controller: 'SingCtrl',
        controllerAs: 'vm'        
      })
      .when('/bancas', {
        templateUrl: '../partials/bancaslist.html',
        controller: 'BancaCtrl',
        controllerAs: 'vm'        
      })
      .when('/empresas', {
        templateUrl: '../partials/empresas.html',
        controller: 'EmpresasCtrl',
        controllerAs: 'vm'        
      })
      .when('/pesquisadores', {
        templateUrl: '../partials/pesquisadores.html',
        controller: 'PesquisadoresCtrl',
        controllerAs: 'vm'
      })
      .otherwise({ redirectTo: '/' })
    
    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('blue');
  }]) 
})();
