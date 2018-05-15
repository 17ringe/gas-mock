// PropertiesService クラスのモックを作成
function get_mock(param) {
  var properties = param;
  return {
    // getDocumentProperties 関数の実装
    getDocumentProperties: function() {
      return properties;
    },
    // getScriptProperties 関数の実装
    getScriptProperties: function() {
      return properties;
    },
    // getUserProperties 関数の実装
    getUserProperties: function() {
      return properties;
    }
  };
}

module.exports = {get_mock};
