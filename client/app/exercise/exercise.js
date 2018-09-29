'use strict';

angular.module('brainz21App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('homework.exercise', {
        url: '/exercise/:exerciseId',
        template: '<exercise></exercise>'
      });
  });
