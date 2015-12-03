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

  AreaController.$inject = ['generic', '$mdDialog'];

  function AreaController(generic, $mdDialog) {
    var vm = this;

    generic.get('area').then(function(data) {
      vm.areas = data.data.result;
    });

    vm.salvar = function(area) {
      generic.post('area', area).then(done => {
        console.log(done)
      },err =>{
        console.log(err);
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

      $mdDialog
      .show(confirm).then( conf => {
        console.log(conf); 
      }, err =>{
        console.log(err);
      });
    };

    vm.close = function() {
      vm.area = {};
      vm.tabIndex = 0;
    };
  }
}());
