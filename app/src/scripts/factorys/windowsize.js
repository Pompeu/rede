(function (){
	angular.module('RedeApp')
		.factory('windowSize', windowSize);

		windowSize.$inject = ['$window'];

		function windowSize ($window) {
			var service = {
				isMobile : isMobile
			};

			return service;

		function isMobile() {
			return $window.innerWidth >= 600;
		}
	}
})();
