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

function _addTag(data) {
  var l = _store.list.length;
  _store.list.splice(l, 0, data[0]);
}

function _changeTagStatus(data) {
  var dataId = data[0].id;
  var dataStatus = data[0].status;
  var targetIndex;
  for (var i = 0; i < _store.list.length; i++) {
    if (_store.list[i]['id'] == dataId) {
      targetIndex = i;
      break;
    }
  }

  _store.list[targetIndex].status = dataStatus;
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
    case ActionTypes.TAGS_SCENE_ADD_TAG:
      _addTag(action.data);
      TagsSceneStore.emitChange();
      break;
    case ActionTypes.TAGS_SCENE_CHANGE_TAG_STATUS:
      _changeTagStatus(action.data);
      TagsSceneStore.emitChange();
      break;
    default:

  }
})

module.exports = TagsSceneStore;
