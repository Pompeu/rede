(function(){
  'use strict';
  angular.module('rc.search',[])
    .directive('rcSearch', rcSearch)
    .controller('ImputSearchController', ImputSearchController);

    function rcSearch () {

      var directive = {
        restrict : 'E',
        replace: 'true',
        templateUrl: 'js/rc-search/rc-searc.html',
        link : link,
        controller : ImputSearchController,
        controllerAs : 'ctrl'
      };

      return directive;
      
      function  link () {}
    }

    ImputSearchController.$inject = ['$timeout', '$q', '$log']; 

    function ImputSearchController ($timeout, $q, $log) {
      var self = this;
      self.simulateQuery = false;
      self.isDisabled    = false;
      self.repos         = loadAll();
      self.querySearch   = querySearch;
      self.selectedItemChange = selectedItemChange;
      self.searchTextChange   = searchTextChange;      

      function querySearch (query) {
        var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
            deferred;
        if (self.simulateQuery) {
          deferred = $q.defer();
          $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
          return deferred.promise;
        } else {
          return results;
        }
      }

      function searchTextChange(text) {
        $log.info('Text changed to ' + text);
      }

      function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
      }

      function loadAll() {
        var repos = [
          {
            'name'      : 'Angular 1',
            'url'       : 'https://github.com/angular/angular.js',
            'watchers'  : '3,623',
            'forks'     : '16,175',
          },
          {
            'name'      : 'Angular 2',
            'url'       : 'https://github.com/angular/angular',
            'watchers'  : '469',
            'forks'     : '760',
          },
          {
            'name'      : 'Angular Material',
            'url'       : 'https://github.com/angular/material',
            'watchers'  : '727',
            'forks'     : '1,241',
          },
          {
            'name'      : 'Bower Material',
            'url'       : 'https://github.com/angular/bower-material',
            'watchers'  : '42',
            'forks'     : '84',
          },
          {
            'name'      : 'Material Start',
            'url'       : 'https://github.com/angular/material-start',
            'watchers'  : '81',
            'forks'     : '303',
          }
        ];
        return repos.map( function (repo) {
          repo.value = repo.name.toLowerCase();
          return repo;
        });
      }

      function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(item) {
          return (item.value.indexOf(lowercaseQuery) === 0);
        };
      }
    }
}());
