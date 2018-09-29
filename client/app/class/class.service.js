'use strict';

angular.module('brainz21App')
  .factory('ClassService', function ($resource) {
    return $resource('/api/classes/:id', {
      id: '@id'
    });
  });
