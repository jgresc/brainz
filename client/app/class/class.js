'use strict';

angular.module('brainz21App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('class', {
        url: '/class',
        template: '<class></class>'
      });
  });
