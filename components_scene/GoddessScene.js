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
  TouchableHighlight,
} = React;

var GoddessScene = React.createClass({
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
    var barIcon = <Icon name='bars' size={30} color='#fff' style={GoddessSceneStyle.homeIcon}/>
    return (
        <View>
          <NavigationBar
            title={{title: 'GODDESS', tintColor: '#fff'}}
            tintColor='#df7454'
            statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
            leftButton={barIcon}
            />
          <Text>GoddessScene</Text>
        </View>
    );
  }
});

var GoddessSceneStyle = {
  homeIcon: {
    marginLeft: 10
  }
}

module.exports = GoddessScene;
