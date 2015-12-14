(function(){
  'use strict';
  angular.module('rc.area',[])
  .config(routes)
  .directive('btnArea',btnArea)
  .controller('AreaController', AreaController);

  routes.$inject = ['$stateProvider'];

  function routes ($stateProvider){
    $stateProvider
    .state('areas',{
      url : '/areas',
      templateUrl : 'js/area/area.html',
      controller : 'AreaController',
      controllerAs : 'vm'

    });
  }

  function btnArea() {
    return {
      restrict: 'E',
      templateUrl: 'js/area/painel-adm-btn-area.html'
    };
  }

  AreaController.$inject = ['generic', '$mdDialog', '$mdToast'];

  function AreaController(generic, $mdDialog, $mdToast) {
    var vm = this;

    generic.get('area').then(function(data) {
      vm.areas = data.data.result;
    });

    vm.salvar = function(area) {
      generic.post('area', area).then(function(done) {
        showToast('new area added');
      },function(err) {
        showToast(err);
      });
    };

    vm.action = function(ev, area) {
      var confirm = $mdDialog.confirm()
      .title('Deseja Editar ou Deletar')
      .targetEvent(ev)
      .cancel('Editar')
      .ok('Deletar');

      $mdDialog
      .show(confirm).then( function () {
        vm.remove(ev, area);
      }, function (){
        vm.edit(area);
      });
    };

    vm.edit = function (area) {
      vm.tabIndex = 1;
      vm.area = area;
    };

    vm.remove = function (ev, area) {
      var confirm = $mdDialog.confirm()
      .title('Deseja Deletar a area '+area.nomeArea)
      .targetEvent(ev)
      .cancel('Não')
      .ok('Sim');

      $mdDialog.show(confirm).then(function () {
        vm.areas = vm.areas.filter(function(a) { return  a.id !== area.id;});
        showToast('area removed');
      });
    };
    function showToast (msg) {
      $mdToast.show(
        $mdToast.simple()
        .position('right bottom')
        .content(msg));
    }
    vm.close = function() {
      vm.area = {};
      vm.tabIndex = 0;
    };
  }
}());
