'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import EventEmitter from 'events';
import ActionTypes from '../constants/ActionTypes.js'
import assign from 'lodash/assign'

const CHANGE_EVENT = 'change';

var _store = {
  pageNum: 1,
  hasNextPage: true,
  messageList: []
}

function _setStore(data) {
  _store.pageNum = data.pageNum;
  _store.hasNextPage = data.hasNextPage;
  _store.messageList = data.messages;
}

function _setMessage(messages){
  _store.messageList = messages;
}

var GoddessStore = assign({}, EventEmitter.prototype, {
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

GoddessStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionTypes.GODDESS_RECEIVE_DATA:
      _setStore(action.data);
      GoddessStore.emitChange();
      break;
    default:

  }
})

module.exports = GoddessStore;
