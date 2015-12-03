(function (){
  'use strict';
  angular.module('rc.menu',[])
  .directive('rcMenu',rcMenu);

  function rcMenu () {
    var directive = {
      restrict : 'E',
      replace : true,
      templateUrl: 'js/rc-menu/rc-menu.tpl.html'
    };

    return directive;
  }
}());
