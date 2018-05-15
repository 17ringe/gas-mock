var assert = require('chai').assert;
var gas = require('gas-local');
var Sugar = require('sugar');

var mock = require('../index.js');

var mymock = mock.globalMockDefault;

// ソースフォルダの指定はプロジェクトルートからの相対パス
var glib = gas.require('./src', mymock);

describe('propertiesservice.js', function() {

  it('#getScriptProperties', function() {
    assert.isObject(glib.myPropertiesService());
  });
});
