var Sugar = require('sugar');

// Properties クラスのモックを作成
var Properties = function() {
  var properties_ = {};

  return {
    // getProperty 関数の実装
    getProperty: function(key) {
      var val = properties_[key];
      return val != null ? val : null;
    },

    // setProperty 関数の実装
    setProperty: function(key, value) {
      Sugar.Object.set(properties_, key, value);
      return properties_;
    },

    // getProperties 関数の実装
    getProperties: function() {
      return properties_;
    },

    // setProperties 関数の実装
    setProperties: function(properties, deleteAllOthers) {
      if(deleteAllOthers == true) deleteAllProperties();
      Sugar.Object.merge(properties_, properties);
      return properties_;
    },

    // deleteAllProperties 関数の実装
    deleteAllProperties: function() {
      properties_ = {};
    }
  }
}

function get_mock() {
  return new Properties();
}

module.exports = {get_mock};
