var UserApp = angular.module('UserApp',[]);

UserApp.controller('UserCtrl',['$scope','$http', function ($scope,$http){
		$http.get('/users').
			success(function (data) {
				$scope.users = data;
			}).
			error(function (data,status) {
				$scope.erro = status;
			});		
}]);
	

