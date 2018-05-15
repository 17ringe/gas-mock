// PropertiesService クラスのモックを作成
var PropertiesService = function(properties) {
  var properties_ = properties;

  return {
    // getDocumentProperties 関数の実装
    getDocumentProperties: function() {
      return properties_;
    },

    // getScriptProperties 関数の実装
    getScriptProperties: function() {
      return properties_;
    },

    // getUserProperties 関数の実装
    getUserProperties: function() {
      return properties_;
    }
  }
};

function get_mock(properties) {
  return new PropertiesService(properties);
}

module.exports = {get_mock};
