import AppDispatcher from '../dispatcher/AppDispatcher.js';

import ActionTypes from '../constants/ActionTypes.js';

module.exports = {
  receiveData : function (data) {
    AppDispatcher.dispatch({
      type: ActionTypes.NEWS_DETAIL_RECEIVE_DATA,
      data: data
    })
  }
}
