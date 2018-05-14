var assert = require('chai').assert;
var gas = require('gas-local');
var Sugar = require('sugar');

var mock = require('../index.js');

var mymock = mock.globalMockDefault;

mymock.Logger.enabled = false;

// ソースフォルダの指定はプロジェクトルートからの相対パス
var glib = gas.require('./src', mymock);

describe('urlfetchapp.js', function() {

  before(function() {
    glib = mock.require('./src', mymock);
  });

  it('登録した関数が存在すること', function() {
    assert.property(glib.UrlFetchApp, 'fetch');
  });

  it('myUrlFetchApp for yahoo', function() {
    assert.equal(glib.myUrlFetchApp(), 'Yahoo! JAPAN');
  });

  it('myUrlFetchApp for livedoor', function() {
    assert.equal(glib.myUrlFetchApp('http://www.livedoor.com/'), 'livedoor');
  });

  it('myUrlFetchApp for Shift_JIS', function() {
    assert.equal(glib.myUrlFetchApp('http://abehiroshi.la.coocan.jp/top.htm', 'sjis'), '阿部 寛のホームページ');
  });
});
