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

var NewsScene = React.createClass({
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
    var barIcon = <Icon name='bars' size={30} color='#fff' style={NewsStyle.homeIcon}/>
    return (
        <View>
          <NavigationBar
            title={{title: 'News', tintColor: '#fff'}}
            tintColor='#ccc'
            leftButton={barIcon}
            />
          <Text>NewsScene</Text>
        </View>
    );
  }
});

var NewsStyle = {
  homeIcon: {
    marginLeft: 10
  }
}

module.exports = NewsScene;
