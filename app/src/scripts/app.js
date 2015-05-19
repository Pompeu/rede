(function() {
  'use strict';
  angular
  .module('RedeApp',
  ['ngRoute','ngMaterial','angular-jwt','angular-storage'])
  .config(rotas)
  .config(theming);    
 
  rotas.$inject = ['$routeProvider'];
  theming.$inject = ['$mdThemingProvider']; 
 
  function theming($mdThemingProvider) {

   $mdThemingProvider.definePalette('redePalette', {
    '50': 'e8f5e9',
    '100': 'c8e6c9',
    '200': 'a5d6a7',
    '300': '81c784',
    '400': '66bb6a',
    '500': '4caf50',
    '600': '43a047',
    '700': '388e3c',
    '800': '2e7d32',
    '900': '1b5e20',
    'A100': 'b9f6ca',
    'A200': '69f0ae',
    'A400': '00e676',
    'A700': '00c853',
    'contrastDefaultColor': 'Green',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors':  ['A200', 'A400', //hues which contrast should be 'dark' by default
     'A700']   // could also specify this if default was 'dark'
    });
    $mdThemingProvider
      .theme('default')
      .primaryPalette('redePalette');
  }

  function rotas ($routeProvider) {
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
      .when('/paineladm', {
        templateUrl: '../partials/painel-adm.html',
        controller: 'PainelCtrl',
        controllerAs: 'vm'
      })
      .otherwise({ redirectTo: '/timeline' });   
  }
})();
