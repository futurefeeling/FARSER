'use strict';

var React = require('react-native');
var { Dimensions } = React;

var SCREEN_WIDTH = Dimensions.get('window').width;

var { DRAWER_OFFSET } = require('../constants/ActionTypes.js');
var Search = require('../components/Search.js');
var Logo = require('../components/Logo.js');
var MenuList = require('../components/MenuList.js');

var {
  StyleSheet,
  View,
  scrollViewew,
  Image,
  PixelRatio,
  TextInput,
  Text,
  ListView,
  TouchableHighlight,
  StatusBarIOS
} = React;

StatusBarIOS.setStyle('light-content');

var DrawerScene = React.createClass({
  render: function() {
    return (
      <View style={DrawerSceneStyle.container}>
        <Search />
        <Logo />
        <MenuList closeDrawer={this.props.closeDrawer}/>
      </View>
    );
  }
});

var DrawerSceneStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#433a34',
    marginRight: DRAWER_OFFSET,
    justifyContent: 'flex-start'
  }
});

module.exports = DrawerScene;
