(function(){
  'use strict';
  angular.module('rc.select',[])
  .directive('rcSelect', rcSelect);

  function rcSelect () {
    var directive = {
      restrict : 'E',
      scope : {
        aria : "@",
        item : "=",
        items : "="
      },
      templateUrl : 'js/rc-select/select-area.html',
    };

      return directive;

    }

  }());
