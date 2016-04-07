'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Navigator,
  TouchableHighlight
} = React;

import AppStore from './stores/AppStore.js';
import AppActionCreators from './actions/AppActionCreators.js';
import DrawerScene from './module/DrawerScene.js';
import BlogScene from './module/BlogScene.js';
import GoddessScene from './module/GoddessScene.js';
import NewsScene from './module/NewsScene.js';
import TagsScene from './module/TagsScene.js';

var assign = require('lodash/assign');
var Icon = require('react-native-vector-icons/FontAwesome')
var Drawer = require('react-native-drawer');
var { DRAWER_OFFSET } = require('./constants/ActionTypes.js');

function getStatusFromStore() {
  return AppStore.getStore();
}

// 关于icon作为图片的使用：
// https://github.com/oblador/react-native-vector-icons#usage-as-png-imagesource-object
var App = React.createClass({
  getInitialState: function() {
    return getStatusFromStore();
  },

  componentDidMount: function() {
    AppActionCreators.setDrawerStatus(false);
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  closeDrawer: function() {
    AppActionCreators.setDrawerStatus(false);
    if (!this.state.isDrawerOpened) {
      this.refs.drawer.close();
    }
  },

  openDrawer: function() {
    AppActionCreators.setDrawerStatus(true);
    if (this.state.isDrawerOpened) {
      this.refs.drawer.open();
    }
  },

  handlePressBtn: function(){
    if (this.state.isDrawerOpened) {
      AppActionCreators.setDrawerStatus(false);
      this.refs.drawer.close();
    } else {
      AppActionCreators.setDrawerStatus(true);
      this.refs.drawer.open();
    }
  },

  changeNavigator: function(route) {
    this.refs.nav.replace(route);
    this.closeDrawer();
  },

  renderScene: function(route, navigator) {
    return <route.component
      route={route}
      navigator={navigator}
      handlePressBtn={this.handlePressBtn}
    />
  },

  render: function() {
    var initialRoute = {
      component: GoddessScene
    };

    return (
      <Drawer ref="drawer"
        ref="drawer"
        type="static"
        content={<DrawerScene changeNavigator={this.changeNavigator} />}
        openDrawerOffset={DRAWER_OFFSET}
        styles={{main: {shadowColor: "#000000", shadowOpacity: 0.3, shadowRadius: 15}}}
        captureGestures={false}
        tweenDuration={100}
        negotiatePan={true}
        panThreshold={0.08}
        panOpenMask={0.35}
        disabled={this.state.drawerDisabled}
        tweenHandler={Drawer.tweenPresets.parallax}>

        <Navigator
          ref='nav'
          initialRoute={initialRoute}
          renderScene={this.renderScene}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
          />
      </Drawer>
    );
  },

  _onChange: function() {
    this.setState(getStatusFromStore());
  }
});

module.exports = App;
