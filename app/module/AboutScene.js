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
  WebView
} = React;

var ABOUT_COLOR = 'rgb(34, 24, 27)';

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
        <View style={AboutSceneStyle.container}>
          <NavigationBar
            title={{title: 'ABOUT', tintColor: '#fff'}}
            tintColor={ABOUT_COLOR}
            statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
            />
          <WebView style={AboutSceneStyle.webview}
              source={require('../data/personal/index.html')}
              startInLoadingState={true}>
          </WebView>
        </View>
    );
  }
});

var AboutSceneStyle = {
  container: {
    flex: 1
  },
  webview: {
    flex: 1
  }
}

module.exports = AboutScene;
