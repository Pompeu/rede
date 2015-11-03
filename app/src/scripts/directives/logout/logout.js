(function(){

	'use strict';
	angular.module('RedeApp')
		.directive('logOut', logOut);

		function logOut () {
			var directive = {
				scope : {
					max: "="
				},
				link : link,
				templateUrl : "js/logout/logout-btn.html",
				restrict : "EA",
				controller : LogoutCrtl,
				controllerAs : 'vm',
				bindToController: true
			}

			return directive;

			function link (scope, elem, attrs) {
      }
		}

		LogoutCrtl.$inject = ["$rootScope" , "$window"];

		function LogoutCrtl ($rootScope, $window) { 
			var vm = this;
			vm.logout  = function (ev){
				$rootScope.user = null;
				$window.localStorage.removeItem('user');
        $rootScope.$emit('logout:event', false);
			};
		}
})();
