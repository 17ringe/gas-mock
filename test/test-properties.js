var assert = require('chai').assert;
var gas = require('gas-local');

var mock = require('../index.js');
var glib = gas.require('./src', mock.globalMockDefault);

describe('Properties.js', function() {

  it('ローカル変数に外部からアクセスできないこと', function() {
    assert.isUndefined(glib.Properties.properties_);
    assert.isUndefined(glib.Properties.properties);
  });

  it('必要な関数が存在すること', function() {
    assert.property(glib.Properties, 'getProperty');
    assert.property(glib.Properties, 'getProperties');
    assert.property(glib.Properties, 'setProperty');
    assert.property(glib.Properties, 'setProperties');
    assert.property(glib.Properties, 'deleteAllProperties');
  });

  xit('残2) 未実装の関数 http://bit.ly/2wHLPJz', function() {
    assert.property(glib.Properties, 'deleteProperty');
    assert.property(glib.Properties, 'getKeys');
  });

  it('#setProperty', function() {
    assert.property(glib.testSPsetProperty('gas', 'ok'), 'gas');
  });

  it('#getProperty', function() {
    assert.equal(glib.testSPgetProperty('gas'), 'ok');
    assert.isNull(glib.testSPgetProperty('fail'));
  });

  it('#deleteAllProperties', function() {
    assert.isEmpty(glib.testSPdeleteAllProperties());
  });
});
