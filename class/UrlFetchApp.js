var request = require('sync-request');

// UrlFetchApp クラスのモックを作成
function get_mock(param) {
  return (function() {
    var response = param;

    return {
      // fetch 関数の実装
      fetch: function(url, params) {
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
        response.content = req.body;
        return response;
      }
    }
  })();
}

module.exports = {get_mock};
