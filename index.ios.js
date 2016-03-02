'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  NavigatorIOS,
  TouchableHighlight,
  StatusBarIOS
} = React;


import AppStore from './stores/AppStore.js';
import GoddessScene from './components_scene/GoddessScene.js';
import AppActionCreators from './actions/AppActionCreators.js';
import DrawerScene from './components_scene/DrawerScene.js';

var Icon = require('react-native-vector-icons/FontAwesome')
var Drawer = require('./vendor/react-native-drawer');
var { DRAWER_OFFSET } = require('./constants/ActionTypes.js');

function getDrawerStatusFromStore() {
  return {
    isDrawerOpened: AppStore.getDrawerStatus()
  }
}

StatusBarIOS.setStyle('light-content'); // 状态栏文字颜色白色

// 关于icon作为图片的使用：
// https://github.com/oblador/react-native-vector-icons#usage-as-png-imagesource-object
var MainView = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'home',
    };
  },

  componentWillMount: function() {
    // https://github.com/facebook/react-native/issues/1403 prevents this to work for initial load
    Icon.getImageSource('bars', 30).then((source) => this.setState({ barsIcon: source }));
  },

  render: function() {
    if(!this.state.barsIcon) {
      return false;
    }

    return (
      <View style={{flex: 1}}>
        <NavigatorIOS
          style={{flex: 1}}
          barTintColor='#df7454'
          titleTextColor='#fff'
          tintColor='#fff'
          ref='nav'
          initialRoute={{
            component: GoddessScene,
            title: 'Goddess Time',
            leftButtonIcon: this.state.barsIcon,
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
