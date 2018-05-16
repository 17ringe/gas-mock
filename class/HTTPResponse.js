var iconv = require('iconv-lite');

// HTTPResponse クラスのモックを作成
var HTTPResponse = function(body) {
  var content_ = body;
  var response = {};

  // getContentText 関数の実装
  response.getContentText = function(charset) {
    if(charset == null) charset = 'utf8';
    return iconv.decode(content_, charset);
  }

  // 独自の setContentText 関数を実装
  response.setContentText = function(content) {
    content_ = content;
  }

  return response;
}

function get_mock(body) {
  return new HTTPResponse(body);
}

module.exports = {get_mock};
