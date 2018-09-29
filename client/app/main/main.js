'use strict';

angular.module('brainz21App')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>' // reference to main component defined in main.controller.js
      });
  });
