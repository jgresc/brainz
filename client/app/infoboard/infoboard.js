'use strict';

angular.module('brainz21App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('infoboard', {
        url: '/infoboard',
        template: '<infoboard></infoboard>'
      });
  });
