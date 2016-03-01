'use strict';

import keyMirror from 'keymirror';
import assign from 'lodash/assign'

var consts = keyMirror({
  TEST_ACTION: null,
  // other action ...
});

module.exports = assign(consts, {
  DRAWER_OFFSET: 60
});
