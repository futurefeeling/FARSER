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
    var barIcon = <Icon name='bars' size={30} color='#fff' style={SettingSceneStyle.homeIcon}/>
    return (
        <View>
          <NavigationBar
            title={{title: 'Setting', tintColor: '#fff'}}
            tintColor='#433a34'
            leftButton={barIcon}
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
