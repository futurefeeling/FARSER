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
  Dimensions,
  TouchableHighlight,
} = React;

var Icon = require('react-native-vector-icons/FontAwesome');

var SCREEN_WIDTH = Dimensions.get('window').width;

var Message = React.createClass({
  getInitialState: function() {
    return {
      yourState: null
    }
  },

  render: function() {
    return (
      <View style={MessageStyle.container}>
        {/* write your code here */}
      </View>
    );
  }
});

var MessageStyle = {
  container: {
    height: 100,
    width: SCREEN_WIDTH - 20,
    backgroundColor: "#ffffff",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1
    }
  }
}

module.exports = Message;
