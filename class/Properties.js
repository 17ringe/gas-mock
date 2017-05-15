var Sugar = require('sugar');

// Properties クラスのモックを作成
function get_mock() {
  return {
    properties: {},
    // getProperty 関数の実装
    getProperty: function(key) {
      return this.properties[key];
    },
    // setProperty 関数の実装
    setProperty: function(key, value) {
      Sugar.Object.set(this.properties, key, value);
    },
    // getProperties 関数の実装
    getProperties: function() {
      return this.properties;
    },
    // deleteAllProperties 関数の実装
    deleteAllProperties: function() {
      this.properties = {};
    }
  };
}

module.exports = {get_mock};
