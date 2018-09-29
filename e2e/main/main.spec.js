'use strict';

var config = browser.params;

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get(config.baseUrl + '/');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('brainz21 - Die Plattform für den');
    expect(page.imgEl.getAttribute('src')).toMatch(/lehrplan21.jpg$/);
  });
});
