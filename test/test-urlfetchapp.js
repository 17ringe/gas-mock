var assert = require('chai').assert;
var gas = require('gas-local');
var Sugar = require('sugar');

var mock = require('../index.js');

var mymock = mock.globalMockDefault;

mymock.Logger.enabled = false;

// ソースフォルダの指定はプロジェクトルートからの相対パス
var glib = gas.require('./src', mymock);

describe('urlfetchapp.js', function() {
  // mocha がタイムアウトするまでの時間を延長
  this.timeout(4000);

  before(function() {
    glib = mock.require('./src', mymock);
  });

  it('登録した関数が存在すること', function() {
    assert.property(glib.UrlFetchApp, 'fetch');
  });

  it('デフォルト文字コードがUTF8であること', function() {
    assert.match(glib.myUrlFetchApp(), /日本語 utf8/);
  });

  it('UTF8を指定して正しく動作すること', function() {
    var url = 'https://www.google.com/search?q=%E6%97%A5%E6%9C%AC%E8%AA%9E%20utf8&oe=utf8'
    assert.match(glib.myUrlFetchApp(url, 'utf8'), /日本語 utf8/);
  });

  it('SJISを指定して正しく動作すること', function() {
    var url = 'https://www.google.com/search?q=%E6%97%A5%E6%9C%AC%E8%AA%9E%20sjis&oe=sjis'
    assert.match(glib.myUrlFetchApp(url, 'sjis'), /日本語 sjis/);
  });

  it('EUCJPを指定して正しく動作すること', function() {
    var url = 'https://www.google.com/search?q=%E6%97%A5%E6%9C%AC%E8%AA%9E%20eucjp&oe=eucjp'
    assert.match(glib.myUrlFetchApp(url, 'eucjp'), /日本語 eucjp/);
  });
});
