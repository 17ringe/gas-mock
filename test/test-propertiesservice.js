var assert = require('chai').assert;
var gas = require('gas-local');

var mock = require('../index.js');
var glib = gas.require('./src', mock.globalMockDefault);

describe('PropertiesService.js', function() {

  it('ローカル変数に外部からアクセスできないこと', function() {
    assert.isUndefined(glib.PropertiesService.properties_);
    assert.isUndefined(glib.PropertiesService.Service);
  });

  it('必要な関数が存在すること', function() {
    assert.property(glib.PropertiesService, 'getDocumentProperties');
    assert.property(glib.PropertiesService, 'getScriptProperties');
    assert.property(glib.PropertiesService, 'getUserProperties');
  });

  it('#getScriptProperties', function() {
    assert.isObject(glib.myPropertiesService());
  });
});
