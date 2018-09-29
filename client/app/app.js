'use strict';

angular.module('brainz21App', [
  'brainz21App.auth',
  'brainz21App.admin',
  'brainz21App.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngYoutubeEmbed',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider, $sceDelegateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://www.youtube.com/**',
      'http://www.geogebra.org/**'
    ]);
  });
