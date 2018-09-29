'use strict';

describe('Component: ExerciseComponent', function () {

  // load the controller's module
  beforeEach(module('brainz21App'));

  var ExerciseComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ExerciseComponent = $componentController('ExerciseComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
