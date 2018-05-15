function myUrlFetchApp(url, char) {
  if( url == null ) url = 'https://www.google.com/search?q=%E6%97%A5%E6%9C%AC%E8%AA%9E%20utf8&oe=utf8';
  if( char == null ) char = 'utf8';

  var response = UrlFetchApp.fetch(url);
  response = response.getContentText(char);

  var myRegexp = /<title>([\s\S]*?)<\/title>/i;
  var match = myRegexp.exec(response);
  var title = match[1];

  title = title.replace(/(^\s+)|(\s+$)/g, '');
  Logger.log(title);
  return title;
}
