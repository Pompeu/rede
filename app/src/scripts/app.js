(function() {
  'use strict';
  angular
  .module('RedeApp',
  ['ui.router','ngMaterial','angular-jwt','angular-storage'])
  .config(rotas)
 
  rotas.$inject = ['$stateProvider', '$urlRouterProvider'];

	function rotas ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('index', {
				url : '/',
				templateUrl: '../partials/timeline.html',
        controller: 'TimeLineCtrl',
        controllerAs: 'vm'
			})
	}
})();
