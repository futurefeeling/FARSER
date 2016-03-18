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

var News = React.createClass({
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
    var barIcon = <Icon name='bars' size={30} color='#fff'/>
    return (
        <View>
          <NavigationBar
            title={{title: 'News', tintColor: '#fff'}}
            tintColor='#ccc'
            leftButton={barIcon}
            />
          <Text>22.1</Text>
          <Text>22</Text>
          <Text>22</Text>
          <Text>22</Text>
          <Text>22</Text>
          <Text>22</Text>
          <Text>22</Text>
          <Text>22</Text>

        </View>
    );
  }
});

module.exports = News;
