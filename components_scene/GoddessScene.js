'use strict';

import React from 'react-native';
import NavigationBar from 'react-native-navbar';

var navbarStyle = require('../navbarStyle.js');

var Icon = require('react-native-vector-icons/FontAwesome');

var GODDESS_COLOR = '#df7454';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  TouchableHighlight,
} = React;

var TIMES = 100;

var GoddessScene = React.createClass({
  getInitialState: function() {
    return {
      rotateValue: new Animated.Value(0)
    }
  },

  _startAnimation: function() {
    this.state.rotateValue.setValue(0);
    Animated.timing(this.state.rotateValue, {
      toValue: 50*TIMES,
      duration: 800*TIMES,
      easing: Easing.linear
    }).start(this._startAnimation.bind(this));
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

module.exports = GoddessScene;
