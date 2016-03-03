'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  scrollViewew,
  Image,
  PixelRatio,
  TextInput,
  Text,
  ListView,
  TouchableHighlight,
} = React;

var Icon = require('react-native-vector-icons/FontAwesome');

var ComponentsDemo = React.createClass({
  getInitialState: function() {
    return {
      yourState: null
    }
  },

  render: function() {
    return (
      <View style={ComponentsDemoStyle.container}>
        {/* write your code here */}
      </View>
    );
  }
});

var ComponentsDemoStyle = {
  container: {
    flex: 1
  }
}

module.exports = ComponentsDemo;
