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
        .then(function(areas) {
          vm.areas = areas.result;
        },function(err) {
          alert(err);
        });
    };
  }    
})();
