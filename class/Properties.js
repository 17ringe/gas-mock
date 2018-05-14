var Sugar = require('sugar');

// Properties クラスのモックを作成
function get_mock() {
  return {
    properties: {},

    // getProperty 関数の実装
    getProperty: function(key) {
      var val = this.properties[key];
      return val != null ? val : null;
    },

    // setProperty 関数の実装
    setProperty: function(key, value) {
      Sugar.Object.set(this.properties, key, value);
      return this.properties;
    },

    // getProperties 関数の実装
    getProperties: function() {
      return this.properties;
    },

    // setProperties 関数の実装
    setProperties: function(properties, deleteAllOthers) {
      if(deleteAllOthers == true) this.deleteAllProperties();
      Sugar.Object.merge(this.properties, properties);
      return this.properties;
    },

    // deleteAllProperties 関数の実装
    deleteAllProperties: function() {
      this.properties = {};
    }
  };
}

module.exports = {get_mock};
