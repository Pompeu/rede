(function(){
		'use strict';
		angular
		.module('RedeApp')
		.factory('generic', generic);

		generic.$inject = ['$http'];

		function generic($http) {

			var URL = "http://localhost:3000/api/";

			var service = {
				get : get,
				post : post,
				put: put,
				del : del
			};

			return service;

			function get(resorce , id) {
        if(id){
          return $http.get(URL+resorce+'/'+id);
        }        
        return $http.get(URL+resorce);
      }

      function post(resorce, body) {
        return $http.post(URL+resorce, body);
      }

      function put(resorce ,body) {
        return $http.put(URL+resorce, body);
      }

      function del(resorce, id) {
        return $http.del(URL+resorce+'/'+id);
      }
    }
})();
