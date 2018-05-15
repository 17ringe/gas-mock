var assert = require('chai').assert;
var gas = require('gas-local');

var mock = require('../index.js');
var glib = gas.require('./src', mock.globalMockDefault);

describe('Logger.js', function() {

  it('ローカル変数に外部からアクセスできないこと', function() {
    assert.isUndefined(glib.Logger.log_);
  });

  it('log 関数が存在すること', function() {
    assert.property(glib.Logger, 'log');
  });

  it('getLog 関数が存在すること', function() {
    assert.property(glib.Logger, 'getLog');
  });
});
