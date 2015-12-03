(function() {
  'use strict';
  angular
  .module('RedeApp',
    ['ui.router','ngMaterial','angular-jwt',
      'angular-storage','rc.projetoslist',
      'rc.area','rc.search','rc.select',
      'rc.logout','rc.menu'])
    .config(rotas)
    .run(verify);

    rotas.$inject = ['$stateProvider', '$urlRouterProvider'];

    function rotas ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('index', {
        url : '/',
        templateUrl: '../partials/timeline.html',
        controller: 'TimeLineCtrl',
        controllerAs: 'vm'
      });
    }

    verify.$inject = ['$rootScope','windowSize'];

    function verify ($rootScope, windowSize) {
      $rootScope.isMobile = windowSize.isMobile();
    }

  })();
