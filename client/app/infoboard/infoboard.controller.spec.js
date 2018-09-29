'use strict';

describe('Component: InfoboardComponent', function () {

  // load the controller's module
  beforeEach(module('brainz21App'));

  var InfoboardComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    InfoboardComponent = $componentController('InfoboardComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
