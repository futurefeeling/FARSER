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
  ActivityIndicatorIOS,
  AlertIOS,
  StatusBarIOS,
} = React;

var TagsScene = React.createClass({
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
            title={{title: 'TAGS', tintColor: '#fff'}}
            tintColor='#1abc9c'
            statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
            />
          <Text>TagsScene</Text>
        </View>
    );
  }
});

var TagsSceneStyle = {
  container: {
    flex: 1
  }
}

module.exports = TagsScene;
