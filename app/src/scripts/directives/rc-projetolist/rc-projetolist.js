(function() {
  angular.module("rc.projetoslist",[])
    .directive("rcProjetoslist", rcProjetoslist)
    .directive("rcProjeto", rcProjeto);

  function rcProjetoslist() {
    var directive = {
      controller : ProjetoListController,
    };

    return directive;

      }
  function ProjetoListController () {
      var vm = this;
      vm.projetos = [];

      vm.registrer = function(projeto) {
        vm.projetos.push(projeto);
      }

      vm.closeAll = function () {
        vm.projetos.forEach(function(projeto) {
          projeto.isOpened = false;
        }); 
      }
  }

  function  rcProjeto() {
    var directive = {
      restrict: 'E',
      templateUrl : "js/rc-projetolist/rc-projetolist.tmpl.html",
      transclude: true,
      replace : true,
      scope: {
        title: "@"
      },
      require : "^rcProjetoslist",
      link : link
    };

    return directive;

    function link(scope, iElement, iAttrs, ctrl) {
      ctrl.registrer(scope);
        scope.open = function () {
        ctrl.closeAll();
        scope.isOpened = !scope.isOpened;
      }; 
    }
  }
})();
