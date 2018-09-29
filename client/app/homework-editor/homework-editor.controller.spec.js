'use strict';

describe('Component: HomeworkEditorComponent', function () {

  // load the controller's module
  beforeEach(module('brainz21App'));

  var HomeworkEditorComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    HomeworkEditorComponent = $componentController('HomeworkEditorComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
