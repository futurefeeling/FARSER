var NewsDetailActionCreators = require('../actions/NewsDetailActionCreators.js');
var request = require('superagent');

module.exports = {
  getData: function(url){
    request
    .get(url)
    .set('Content-Type', 'application/json; charset=UTF-8')
    .end(function(err, res) {
      var data = JSON.parse(res.text);
      NewsDetailActionCreators.receiveData(data);
    })
  }
}
