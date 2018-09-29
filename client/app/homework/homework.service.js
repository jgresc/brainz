'use strict';

angular.module('brainz21App')
  .factory('HomeworkService', function ($resource) {
    return $resource('/api/homework/:id', {
        id: '@id'
    });
  });
