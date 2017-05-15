// PropertiesService クラスのモックを作成
function get_mock(param) {
  var properties = param;
  return {
    // getScriptProperties 関数の実装
    getScriptProperties: function() {
      return properties;
    }
  };
}

module.exports = {get_mock};
