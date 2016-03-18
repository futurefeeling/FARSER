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
    var barIcon = <Icon name='bars' size={30} color='#fff' style={TagsSceneStyle.homeIcon}/>
    return (
        <View>
          <NavigationBar
            title={{title: 'Tags', tintColor: '#fff'}}
            tintColor='#34495e'
            leftButton={barIcon}
            />
          <Text>TagsScene</Text>
        </View>
    );
  }
});

var TagsSceneStyle = {
  homeIcon: {
    marginLeft: 10
  }
}

module.exports = TagsScene;
