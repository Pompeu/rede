(function(){
  angular.module('RedeApp')
		.directive('headerMobile',headerMobile);

	function headerMobile () {
		var directive = {
					restrict: 'E',
					replace: true,
					link: link,
					templateUrl: 'js/header-mobile/header-mobile.html',
					controller: MenuCtrl,
					controllerAs: 'vm'
		}

		return directive;
	}

	MenuCtrl.$inject= ['$mdDialog'];

	function MenuCtrl ($mdDialog) {
		var vm = this;
		vm.item = function (i) {
		}
	}

	function link (scope, el, attr) {
	}
	
}());
