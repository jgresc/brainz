'use strict';

describe('Component: HomeworkComponent', function () {

  // load the controller's module
  beforeEach(module('brainz21App'));

  var HomeworkComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    HomeworkComponent = $componentController('HomeworkComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
