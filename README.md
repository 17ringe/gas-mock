# gas-mock

This project is Mock library for Google Apps Script.
Run and test locally without changing the source code of gas.

## Initialize

```
$ npm install -g yarn
```

## Create Sample

```
$ mkdir gas-project
$ cd gas-project
$ yarn add https://github.com/17ringe/gas-mock
$ yarn add mocha chai
$ mkdir src test
$ touch src/urlfetchapp.js
$ touch test/test-urlfetchapp.js
```

### src/urlfetchapp.js

```
function myUrlFetchApp() {
  var query = encodeURIComponent('日本語 ShiftJIS');
  var char = 'sjis';
  var url = 'https://www.google.com/search?q='+query+'&oe='+char;

  var response = UrlFetchApp.fetch(url);
  response = response.getContentText(char);

  var myRegexp = /<title>([\s\S]*?)<\/title>/i;
  var match = myRegexp.exec(response);
  var title = match[1];

  title = title.replace(/(^\s+)|(\s+$)/g, '');
  Logger.log(title);
  return title;
}
```

### test/test-urlfetchapp.js

```
var gas = require('gas-mock');
var assert = require('chai').assert;
var glib = gas.require('./src');

describe('urlfetchapp.js', function() {

  it('should return ShiftJIS title', function() {
    assert.match(glib.myUrlFetchApp(), /日本語 ShiftJIS/);
  });
});
```

## Run Sample

```
$ yarn mocha test
urlfetchapp.js
    ✓ should return ShiftJIS title (1566ms)

  1 passing (2s)

✨  Done in 2.72s.
```

## Add Mock

### test/test-urlfetchapp.js

```
var glib = gas.require('./src');

// Method 1
glib['Logger']['log'] = function(data) {
  console.log(data);
};

// Method 2
glib.Logger.log = function(data) {
  console.log(data);
};

// Method 3
var Sugar = require('sugar');
Sugar.Object.set(glib, 'Logger.log', function(data) {
  console.log(data);
});
```

## Test Library

```
$ git clone https://github.com/17ringe/gas-mock
$ cd gas-mock
$ yarn install
$ yarn gulp mocha
```
