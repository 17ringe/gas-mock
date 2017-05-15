// Logger クラスのモックを作成
function get_mock() {
  return {
    // log 関数の実装
    log: function(text) {
      console.log(text);
    }
  };
}

module.exports = {get_mock};
