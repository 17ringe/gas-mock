var assert = require('chai').assert;
var gas = require('gas-local');
var Sugar = require('sugar');

var mock = require('../index.js');

var mymock = mock.globalMockDefault;

// ソースフォルダの指定はプロジェクトルートからの相対パス
var glib = gas.require('./src', mymock);

describe('properties.js', function() {

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
