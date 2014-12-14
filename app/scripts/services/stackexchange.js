'use strict';

/**
 * @ngdoc service
 * @name stackOverlowAnalyticsApp.StackExchange
 * @description
 * # StackExchange
 * Service in the stackOverlowAnalyticsApp.
 */
angular.module('stackOverlowAnalyticsApp')
  .service('StackExchange', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var apiUrl = 'https://api.stackexchange.com/2.2';

    this.getTags = function() {
      return $http.get(apiUrl + '/tags?order=desc&sort=popular&site=stackoverflow');
    };
  });
