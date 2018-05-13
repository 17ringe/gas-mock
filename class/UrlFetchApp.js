var request = require('sync-request');

// UrlFetchApp クラスのモックを作成
function get_mock(param) {
  return {
    enabled: true,
    response: param,

    // fetch 関数の実装
    fetch: function(url, params) {
      if(this.enabled == false) {
        this.response.content = new Buffer('');
        return this.response;
      }
      var method = 'GET';
      if(params == null) params = {};
      if(params['method'] != null) {
        method = params['method'].toUpperCase();
      }
      var req;
      if(method == 'POST') {
        req = request(method, url, {
          json: params['payload']
        });
      } else {
        req = request(method, url);
      }
      this.response.content = req.body;
      return this.response;
    }
  }
}

module.exports = {get_mock};
