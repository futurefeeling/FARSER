var GoddessActionCreators = require('../actions/GoddessActionCreators.js');
var request = require('superagent');

module.exports = {
  getData: function(pageNum){
    request.get('http://localhost:8081/data/Goddess.json')
    .set('Content-Type', 'application/json; charset=UTF-8')
    .query({
      pageNum: pageNum
    })
    .end(function(err, res) {
      var data = JSON.parse(res.text);
      GoddessActionCreators.receiveData(data);
    })
  }
}
