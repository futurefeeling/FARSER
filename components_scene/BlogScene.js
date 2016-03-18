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
  ScrollView,
  TouchableHighlight,
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
            title={{title: 'BLOG', tintColor: '#fff'}}
            tintColor='#3498db'
            statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
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
