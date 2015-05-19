(function(){
  'use strict';
  angular
  .module('RedeApp')
  .controller('TimeLineCtrl',TimeLineCtrl);

  TimeLineCtrl.$inject = ['generic'];

  function TimeLineCtrl(generic) {
    var vm = this;
    vm.areas = [];

    vm.loadAreas = function() {
      generic.get('area')
        .success(function(areas) {
          vm.areas = areas.result;
        })
        .error(function(err) {
          alert(err);
        });
    };
  }    
})();