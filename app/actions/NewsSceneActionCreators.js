import AppDispatcher from '../dispatcher/AppDispatcher.js';

import ActionTypes from '../constants/ActionTypes.js';

module.exports = {
  receiveThemeList : function (data) {
    AppDispatcher.dispatch({
      type: ActionTypes.NEWS_SCENE_RECEIVE_THEME_LIST,
      data: data
    })
  }
}
