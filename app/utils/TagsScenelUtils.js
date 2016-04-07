import React from 'react-native';
import TagsSceneActionCreators from '../actions/TagsSceneActionCreators.js';
var request = require('superagent');

module.exports = {
  getData: function(status){
    request
    .get('http://www.farzer.com/todo/todo.get.handle.php')
    .type('application/json')
    .query({
      'status': status
    })
    .accept('json')
    .end(function(err, res) {
      if (res.text) {
        var data = JSON.parse(res.text);
        TagsSceneActionCreators.receiveData(data);
      }
    })
  },

  addTag: function(content) {
    request
    .get('http://www.farzer.com/todo/todo.add.handle.php')
    .type('application/json')
    .query({
      'content': content
    })
    .accept('json')
    .end(function(err, res) {
      var data = JSON.parse(res.text);
      TagsSceneActionCreators.addTag(data);
    })
  },

  changeTagStatus: function(id, status) {
    request
    .get('http://www.farzer.com/todo/todo.update.handle.php')
    .type('application/json')
    .query({
      'id': id,
      'status': status
    })
    .accept('json')
    .end(function(err, res) {
      // console.log(res.text);
      var data = JSON.parse(res.text);
      TagsSceneActionCreators.changeTagStatus(data);
    })
  }
}
