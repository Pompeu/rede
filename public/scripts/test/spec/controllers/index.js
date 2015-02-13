'use strict';

describe('Controller: IndexCtrl', function () {

  // load the controller's module
  beforeEach(module('AppRede'));

  var IndexctrlCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IndexctrlCtrl = $controller('IndexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
