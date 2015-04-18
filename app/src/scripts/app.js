(function() {
  'use strict';
  angular
  .module('RedeApp', ['ngRoute','ngMaterial'])
  .config(rotas);

  rotas.$inject = ['$routeProvider' , '$mdThemingProvider'];

  function rotas ($routeProvider , $mdThemingProvider ) {
      $routeProvider
      .when('/timeline', {
        templateUrl: '../partials/timeline.html',
        controller: 'TimeLineCtrl',
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
      .when('/publicacoes', {
        templateUrl: '../partials/publicacoes.html',
        controller: 'PublicacoesCtrl',
        controllerAs: 'vm'
      })
      .otherwise({ redirectTo: '/timeline' })
    
    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('blue');
  }

})();
