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
    $scope.tags = [];

    StackExchange.getTags()
      .success(function(res) {
        $scope.tags = res.items;
      });

    $scope.searchTag = function(val) {
      console.log('searchTag');
      return StackExchange.searchTag(val)
        .success(function(res) {
          console.log(res);
          return res;
        });
    };

    // console.log($scope.searchTag('java'));

    StackExchange.getTagHistory('java')
      .success(function(res) {
        console.log(res.items);
      });
  });
