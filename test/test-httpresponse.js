var assert = require('chai').assert;
var gas = require('gas-local');

var mock = require('../index.js');
var glib = gas.require('./src', mock.globalMockDefault);

describe('HTTPResponse.js', function() {

  it('ローカル変数に外部からアクセスできないこと', function() {
    assert.isUndefined(glib.HTTPResponse.content_);
    assert.isUndefined(glib.HTTPResponse.response);
  });

  it('getContentText 関数が存在すること', function() {
    assert.property(glib.HTTPResponse, 'getContentText');
  });
});
