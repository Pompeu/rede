
(function() {
	'use strict';
	angular.module('UserApp',['ngMaterial']).
	controller('UserCtrl', ['$scope','$http', function($scope,$http){
		$http.get('/api/user').
			success(function (data) {
				$scope.users = data.result;
				console.log(data)
			}).
			error(function (data,status) {
				$scope.erro = status;
			});
	}]);
})();
