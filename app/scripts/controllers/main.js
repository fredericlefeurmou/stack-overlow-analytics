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
    $scope.trackedTags = [];
    $scope.trackedTagsDetail = [];

    StackExchange.getTags()
      .success(function(res) {
        $scope.tags = res.items;
      });

    $scope.searchTag = function(tag) {
      console.log('searchTag');
      return StackExchange.searchTag(tag)
        .success(function(res) {
          console.log(res);
          return res;
        });
    };

    // console.log($scope.searchTag('java'));

    $scope.getTagHistory = function(tag) {
      return StackExchange.getTotalTaggedQuestions(tag)
        .success(function(res) {
          if ($scope.trackedTags.indexOf(tag) === -1) {
            var trackedTagDetail = {
              name: tag,
              total: res.total
            };
            $scope.trackedTags.push(tag);
            $scope.trackedTagsDetail.push(trackedTagDetail);
            console.log($scope.trackedTags);
            console.log($scope.trackedTagsDetail);
          }
        });
    };

  });
