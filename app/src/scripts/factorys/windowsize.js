(function (){
	angular.module('RedeApp')
		.factory('windowSize', windowSize);

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
