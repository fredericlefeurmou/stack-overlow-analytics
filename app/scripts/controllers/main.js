'use strict';

/**
 * @ngdoc function
 * @name stackOverlowAnalyticsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stackOverlowAnalyticsApp
 */
angular.module('stackOverlowAnalyticsApp')
  .controller('MainCtrl', function ($scope, StackExchange) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.tags = [];

    StackExchange.getTags()
      .success(function(res) {
        $scope.tags = res.items;
      });
  });
