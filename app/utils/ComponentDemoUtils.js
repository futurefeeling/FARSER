var ComponentDemoActionCreators = require('../actions/ComponentDemoActionCreators.js');
var fetch = require('whatwg-fetch');

module.exports = {
  getData: function(){
    fetch('../data/Goddess.json')
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log('parsed json', json);
    }).catch(function(ex){
      console.log('parsing failed', ex);
    })
  }
}
