import AppDispatcher from '../dispatcher/AppDispatcher.js';

import ActionTypes from '../constants/ActionTypes.js';

module.exports = {
  receiveData : function (data) {
    AppDispatcher.dispatch({
      type: ActionTypes.TAGS_SCENE_RECEIVE_DATA,
      data: data
    })
  },

  addTag: function(data) {
    AppDispatcher.dispatch({
      type: ActionTypes.TAGS_SCENE_ADD_TAG,
      data: data
    })
  },

  changeTagStatus: function(data) {
    AppDispatcher.dispatch({
      type: ActionTypes.TAGS_SCENE_CHANGE_TAG_STATUS,
      data: data
    })
  }
}
