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
      return $http.get(apiUrl + '/tags', {
        params: {
          order: 'desc',
          sort: 'popular',
          site: 'stackoverflow'
        }
      });
    };

    this.searchTag = function(tag) {
      return $http.get('http://stackoverflow.com/filter/tags', {
        params: {
          q: tag,
          newstyle: true
        }
      });
    };

    this.getTotalTaggedQuestions = function(tag, fromDate, toDate) {
      return $http.get(apiUrl + '/search', {
        params: {
          order: 'desc',
          sort: 'activity',
          site: 'stackoverflow',
          filter: 'total',
          tagged: tag,
          fromdate: fromDate,
          todate: toDate
        }
      });
    };
  });
