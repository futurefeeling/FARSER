var NewsSceneActionCreators = require('../actions/NewsSceneActionCreators.js');
var request = require('superagent');

module.exports = {
  getData: function(){
    request
    .get('http://news-at.zhihu.com/api/4/themes')
    .set('Content-Type', 'application/json; charset=UTF-8')
    .end(function(err, res) {
      var data = JSON.parse(res.text);
      NewsSceneActionCreators.receiveThemeList(data);
    })
  }
}
