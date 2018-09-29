'use strict';

angular.module('brainz21App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('homework', {
        url: '/homework/:homeworkId',
        template: '<homework></homework>'
      });
  });
