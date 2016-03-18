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

var BlogScene = React.createClass({
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
    var barIcon = <Icon name='bars' size={30} color='#fff' style={BlogSceneStyle.homeIcon}/>
    return (
        <View>
          <NavigationBar
            title={{title: 'Blog', tintColor: '#fff'}}
            tintColor='#3498db'
            leftButton={barIcon}
            />
          <Text>BlogScene</Text>
        </View>
    );
  }
});

var BlogSceneStyle = {
  homeIcon: {
    marginLeft: 10
  }
}

module.exports = BlogScene;
