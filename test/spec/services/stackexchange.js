'use strict';

describe('Service: StackExchange', function () {

  // load the service's module
  beforeEach(module('stackOverlowAnalyticsApp'));

  // instantiate service
  var StackExchange;
  beforeEach(inject(function (_StackExchange_) {
    StackExchange = _StackExchange_;
  }));

  it('should do something', function () {
    expect(!!StackExchange).toBe(true);
  });

});
