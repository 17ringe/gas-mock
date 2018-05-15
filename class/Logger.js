// Logger クラスのモックを作成
var Logger = function(logger) {
  var log_ = [];

  logger.enabled = false;

  // log 関数の実装
  logger.log = function(data) {
    log_.push(data);
    if(this.enabled == true) console.log(data);
  }

  // getLog 関数の実装
  logger.getLog = function() {
    return log_.join("\n");
  }

  return logger;
}

function get_mock(logger) {
  return new Logger(logger);
}

module.exports = {get_mock};
