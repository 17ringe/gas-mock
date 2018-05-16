// PropertiesService クラスのモックを作成
var PropertiesService = function(properties) {
  var properties_ = properties;
  var service = {};

  // getDocumentProperties 関数の実装
  service.getDocumentProperties = function() {
    return properties_;
  }

  // getScriptProperties 関数の実装
  service.getScriptProperties = function() {
    return properties_;
  }

  // getUserProperties 関数の実装
  service.getUserProperties = function() {
    return properties_;
  }

  return service;
}

function get_mock(properties) {
  return new PropertiesService(properties);
}

module.exports = {get_mock};
