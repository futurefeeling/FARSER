/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';


import AppStore from './stores/AppStore.js';
import GoddessScene from './components_scene/GoddessScene.js';
import AppActionCreators from './actions/AppActionCreators.js';
import DrawerScene from './components_scene/DrawerScene.js';

var Drawer = require('./vendor/react-native-drawer');
var { DRAWER_OFFSET } = require('./constants/ActionTypes.js');

function getDrawerStatusFromStore() {
  return {
    isDrawerOpened: AppStore.getDrawerStatus()
  }
}

var MainView = React.createClass({

  render: function() {
    return (
      <View style={{flex: 1}}>
        <NavigatorIOS
          style={{flex: 1}}
          barTintColor='#433a34'
          titleTextColor='#fff'
          ref='nav'
          initialRoute={{
            component: GoddessScene,
            title: 'Goddess Time',
            leftButtonTitle: 'Home',
            onLeftButtonPress: () => {
              this.props.drawerStatus ? this.props.closeDrawer() : this.props.openDrawer()
            }
          }}
        />
      </View>
    );
  }
});

var FARSER = React.createClass({
  getInitialState: function() {
    return getDrawerStatusFromStore();
  },

  componentDidMount: function() {
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

  render: function() {
    return (
      <Drawer ref="drawer"
        type="static"
        openDrawerOffset={DRAWER_OFFSET}
        panOpenMask={.8}
        content={<DrawerScene closeDrawer={this.closeDrawer} />}>

        <MainView
          drawerStatus={this.state.isDrawerOpened}
          closeDrawer={this.closeDrawer}
          openDrawer={this.openDrawer}/>

      </Drawer>
    );
  },

  _onChange: function() {
    this.setState(getDrawerStatusFromStore());
  }
});

AppRegistry.registerComponent('FARSER', () => FARSER);
