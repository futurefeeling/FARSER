'use strict';

import React from 'react-native';

import NavigationBar from 'react-native-navbar';

var Icon = require('react-native-vector-icons/FontAwesome');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  LayoutAnimation,
  ScrollView,
  NavigatorIOS,
  TouchableHighlight,
} = React;

var AboutScene = React.createClass({
  getInitialState: function() {
    return {
      start: true
    }
  },

  componetDidMount: function () {

  },

  componentWillUnmount: function () {

  },

  render: function() {
    return (
        <View>
          <NavigationBar
            title={{title: 'ABOUT', tintColor: '#fff'}}
            tintColor='#433a34'
            statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
            />
          <Text>AboutScene</Text>
        </View>
    );
  }
});

var AboutSceneStyle = {
  homeIcon: {
    marginLeft: 10
  }
}

module.exports = AboutScene;
