'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import EventEmitter from 'events';
import ActionTypes from '../constants/ActionTypes.js'
import assign from 'lodash/assign'

const CHANGE_EVENT = 'change';

var _store = {
  list: []
}

function _setStore(data) {
  _store.list = data;
}

var TagsSceneStore = assign({}, EventEmitter.prototype, {
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

TagsSceneStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionTypes.TAGS_SCENE_RECEIVE_DATA:
      _setStore(action.data);
      TagsSceneStore.emitChange();
      break;
    default:

  }
})

module.exports = TagsSceneStore;
