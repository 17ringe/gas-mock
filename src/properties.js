function testSPsetProperty(key, val) {
  var sp = PropertiesService.getScriptProperties();
  return sp.setProperty(key, val);
}

function testSPgetProperty(key) {
  var sp = PropertiesService.getScriptProperties();
  return sp.getProperty(key);
}

function testSPdeleteAllProperties() {
  var sp = PropertiesService.getScriptProperties();
  sp.deleteAllProperties();
  return sp.getProperties();
}
