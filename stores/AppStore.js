'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import EventEmitter from 'events';
import ActionTypes from '../constants/ActionTypes.js'
import assign from 'lodash/assign'

const CHANGE_EVENT = 'change';

var _store = {
  isDrawerOpened: false
}

function _setStore(data) {
  _store.isDrawerOpened = data.isDrawerOpened;
}

function _setDrawerStatus(status) {
    _store.isDrawerOpened = status;
}

var AppStore = assign({}, EventEmitter.prototype, {
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
  },

  getDrawerStatus: function() {
      return _store.isDrawerOpened;
  }

});

AppStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionTypes.SET_DRAWER_STATUS:
      _setDrawerStatus(action.status);
      AppStore.emitChange();
      break;
    default:

  }
})

module.exports = AppStore;
