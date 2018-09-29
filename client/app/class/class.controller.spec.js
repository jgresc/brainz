'use strict';

describe('Component: ClassComponent', function () {

  // load the controller's module
  beforeEach(module('brainz21App'));

  var ClassComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ClassComponent = $componentController('ClassComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
