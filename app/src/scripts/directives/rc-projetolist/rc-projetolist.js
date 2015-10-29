(function() {
  angular.module("rc.projetoslist",[])
    .directive("rcProjetoslist", rcProjetoslist);
  
  function  rcProjetoslist () {
    var directive = {
      restrict : "E",
      replace : "true",
      link : link,
      templateUrl : "js/rc-projetolist/rc-projetolist.tmpl.html" 
    };

    return directive;

    function link(scope, iElement, iAttrs) {
        
    }
  }
  
})();
