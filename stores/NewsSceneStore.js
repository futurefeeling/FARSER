'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import EventEmitter from 'events';
import ActionTypes from '../constants/ActionTypes.js'
import assign from 'lodash/assign'

const CHANGE_EVENT = 'change';

var _store = {
  themeList: []
}

function _setStore(data) {
  _store.themeList = data.others;
}

var NewsSceneStore = assign({}, EventEmitter.prototype, {
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

NewsSceneStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionTypes.NEWS_SCENE_RECEIVE_THEME_LIST:
      _setStore(action.data);
      NewsSceneStore.emitChange();
      break;
    default:

  }
})

module.exports = NewsSceneStore;
