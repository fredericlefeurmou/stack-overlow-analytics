'use strict';

/**
 * @ngdoc overview
 * @name stackOverlowAnalyticsApp
 * @description
 * # stackOverlowAnalyticsApp
 *
 * Main module of the application.
 */
angular
  .module('stackOverlowAnalyticsApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
