'use strict';

import keyMirror from 'keymirror';
import assign from 'lodash/assign'

var consts = keyMirror({
  YOUR_ACTION_TYPE: null,
  // other action ...
});

module.exports = assign(consts, {
  DRAWER_OFFSET: 60
});
