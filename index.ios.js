'use strict';

var React = require('react-native');

var { AppRegistry } = React;

import App from './app/App.js';

var FARSER = React.createClass({
  render: function() {
    return (<App/>);
  }
});

AppRegistry.registerComponent('FARSER', () => FARSER);
