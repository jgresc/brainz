'use strict';

angular.module('brainz21App')
  .factory('ExerciseService', function ($resource) {
    return $resource('/api/exercises/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
    });
  });
