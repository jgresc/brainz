'use strict';

angular.module('brainz21App.auth', [
  'brainz21App.constants',
  'brainz21App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
