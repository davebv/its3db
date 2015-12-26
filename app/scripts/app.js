'use strict';

/**
 * @ngdoc overview
 * @name its3dbApp
 * @description
 * # its3dbApp
 *
 * Main module of the application.
 */
angular
  .module('its3dbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
