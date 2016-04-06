'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import EventEmitter from 'events';
import ActionTypes from '../constants/ActionTypes.js'
import assign from 'lodash/assign'

const CHANGE_EVENT = 'change';

var _store = {
  HTML: ''
}

function _setStore(data) {
  var title = data.title;
  var body = data.body;
  var css = data.css[0];
  var js = data.js[0];
  _store.HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=320, user-scalable=no">
      <link rel="stylesheet" href='${css}'><link>
    </head>
    <body>
      ${body}
      <script src='${js}'></script>
    </body>
  </html>
  `;
}

var NewsDetailStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getStore: function(){
    return _store;
  }
});

NewsDetailStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionTypes.NEWS_DETAIL_RECEIVE_DATA:
      _setStore(action.data);
      NewsDetailStore.emitChange();
      break;
    default:

  }
})

module.exports = NewsDetailStore;
