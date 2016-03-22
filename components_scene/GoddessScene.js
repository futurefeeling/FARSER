'use strict';

import React from 'react-native';
import NavigationBar from 'react-native-navbar';

var navbarStyle = require('../navbarStyle.js');
var Icon = require('react-native-vector-icons/FontAwesome');
var GoddessStore = require('../stores/GoddessStore.js');
var Message = require('../components/Message.js');
var GoddessUtils = require('../utils/GoddessUtils.js');

var GODDESS_COLOR = '#df7454';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Animated,
  Easing,
  TouchableHighlight,
} = React;

var TIMES = 100;

function getStatusFromStore() {
  return GoddessStore.getStore();
}

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var MessageList = React.createClass({
  getInitialState: function() {
    return {
      dataSource: ds.cloneWithRows(this.props.messageList),
      loaded: false
    }
  },
  _renderRow: function(){
    return (
      <Message />
    )
  },
  render: function() {
    console.log(this.props);
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        style={MessageListStyle.container}>
        <Message />
      </ListView>
    );
  }
});

var GoddessScene = React.createClass({
  getInitialState: function() {
    GoddessUtils.getData();
    return {
      messages: getStatusFromStore(),
      rotateValue: new Animated.Value(0)
    }
  },

  _startAnimation: function() {
    this.state.rotateValue.setValue(0);
    Animated.timing(this.state.rotateValue, {
      toValue: 50*TIMES,
      duration: 800*TIMES,
      easing: Easing.linear
    }).start(this._startAnimation);
  },

  componentDidMount: function () {
    this._startAnimation();
  },

  componentWillUnmount: function () {

  },

  render: function() {
    var barIcon = <Icon name='bars' size={30} color='#fff' style={GoddessSceneStyle.homeIcon}/>;
    return (
        <View>
          <NavigationBar
            title={{title: 'GODDESS', tintColor: '#fff'}}
            tintColor={GODDESS_COLOR}
            statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
            leftButton={barIcon}
            />
          <View style={GoddessSceneStyle.container}>
            <View style={GoddessSceneStyle.logoBox}>
              <Animated.Image
                source={require('image!goddess')}
                style={[
                  GoddessSceneStyle.logoImg,
                  {transform: [{
                    rotate: this.state.rotateValue.interpolate({
                      inputRange: [0, 360],
                      outputRange: ['0deg', '360deg']
                    })}
                  ]}
                ]}>
              </Animated.Image>
            </View>
            <MessageList messages={this.state.messages}/>
          </View>
        </View>
    );
  }
});

var GoddessSceneStyle = {
  container: {
    alignItems: 'center',
    marginTop: 10
  },
  homeIcon: {
    marginLeft: 10
  },
  logoBox: {
    alignItems: 'center',
    borderRadius: 80,
    height: 80,
    justifyContent: 'center',
    width: 80
  },
  logoImg: {
    borderRadius: 35,
    borderWidth: 1,
    borderColor: GODDESS_COLOR,
    height: 70,
    width: 70
  }
}

var MessageListStyle = {
  container: {
    marginTop: 20
  }
}

module.exports = GoddessScene;
