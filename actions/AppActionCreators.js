import AppDispatcher from '../dispatcher/AppDispatcher.js';

import ActionTypes from '../constants/ActionTypes.js';

module.exports = {
  setDrawerStatus: function (status) {
    AppDispatcher.dispatch({
      type: ActionTypes.SET_DRAWER_STATUS,
      status: status
    })
  }
}
