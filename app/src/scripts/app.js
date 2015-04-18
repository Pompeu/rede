(function() {
  'use strict';
  angular
  .module('RedeApp', ['ngRoute','ngMaterial'])
  .config(rotas);

  rotas.$inject = ['$routeProvider' , '$mdThemingProvider'];

  function rotas ($routeProvider , $mdThemingProvider ) {
      $routeProvider
      .when('/', {
        templateUrl: '../partials/timeline.html',
        controller: 'TimeLineCtrl',
        controllerAs: 'vm'
      })
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
      .when('/equipes', {
        templateUrl: '../partials/equipe.html',
        controller: 'EquipeCtrl',
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
  }

})();
