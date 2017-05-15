var iconv = require('iconv-lite');

// HTTPResponse クラスのモックを作成
function get_mock(body) {
  return {
    // getContentText 関数の実装
    content: body,
    getContentText: function(charset) {
      if(charset == null) charset = 'utf8';
      req = iconv.decode(this.content, charset);
      return req;
    }
  };
}

module.exports = {get_mock};
