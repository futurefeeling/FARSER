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

var SettingScene = React.createClass({
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
            title={{title: 'SETTING', tintColor: '#fff'}}
            tintColor='#433a34'
            statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
            />
          <Text>SettingScene</Text>
        </View>
    );
  }
});

var SettingSceneStyle = {
  homeIcon: {
    marginLeft: 10
  }
}

module.exports = SettingScene;
