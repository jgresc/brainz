'use strict';

angular.module('brainz21App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('homework-editor', {
        url: '/homework-editor',
        template: '<homework-editor></homework-editor>'
      });
  });
