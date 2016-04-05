'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import EventEmitter from 'events';
import ActionTypes from '../constants/ActionTypes.js'
import assign from 'lodash/assign'

const CHANGE_EVENT = 'change';

var _store = {
  yourProperty: null
}

function _setStore(data) {
  _store.yourProperty = data.yourProperty;
}

var ComponentDemoStore = assign({}, EventEmitter.prototype, {
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

ComponentDemoStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionTypes.YOUR_ACTION_TYPE:
      _setStore(action.data);
      ComponentDemoStore.emitChange();
      break;
    default:

  }
})

module.exports = ComponentDemoStore;
