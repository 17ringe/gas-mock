var Sugar = require('sugar');

// Properties クラスのモックを作成
var Properties = function() {
  var properties_ = {};
  var properties = {};

  // getProperty 関数の実装
  properties.getProperty = function(key) {
    var val = properties_[key];
    return val != null ? val : null;
  }

  // setProperty 関数の実装
  properties.setProperty = function(key, value) {
    Sugar.Object.set(properties_, key, value);
    return properties_;
  }

  // getProperties 関数の実装
  properties.getProperties = function() {
    return properties_;
  }

  // setProperties 関数の実装
  properties.setProperties = function(properties, deleteAllOthers) {
    if(deleteAllOthers == true) deleteAllProperties();
    Sugar.Object.merge(properties_, properties);
    return properties_;
  }

  // deleteAllProperties 関数の実装
  properties.deleteAllProperties = function() {
    properties_ = {};
  }

  return properties;
}

function get_mock() {
  return new Properties();
}

module.exports = {get_mock};
