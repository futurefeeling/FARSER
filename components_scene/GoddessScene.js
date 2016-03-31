'use strict';

import NavigationBar from 'react-native-navbar';

import Icon from 'react-native-vector-icons/FontAwesome';
import GoddessStore from '../stores/GoddessStore.js';
import Message from '../components/Message.js';
import GoddessUtils from '../utils/GoddessUtils.js';

var GODDESS_COLOR = '#df7454';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Animated,
  Easing,
  TouchableHighlight,
  ScrollView,
  ActivityIndicatorIOS
} from 'react-native';



function getStatusFromStore() {
  return GoddessStore.getStore();
}

class GoddessScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }

  componentWillUnmount(){
    GoddessStore.removeChangeListener(this._onChange.bind(this));
  }

  componentDidMount() {
    GoddessStore.addChangeListener(this._onChange.bind(this));
  }

  render() {
      var barIcon = <Icon name='bars' size={30} color='#fff' style={GoddessSceneStyle.homeIcon}/>;

      return (
          <View style={GoddessSceneStyle.container}>
            <NavigationBar
              title={{title: 'GODDESS', tintColor: '#fff'}}
              tintColor={GODDESS_COLOR}
              statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
              leftButton={barIcon}
              />
            <ScrollView>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
              <Text style={{height: 40}}>test</Text>
            </ScrollView>
          </View>
        )
  }

  _onChange() {
    this.setState({messages: getStatusFromStore()});
  }
}

var GoddessSceneStyle = {
  container: {
    flex: 1
  },
  homeIcon: {
    marginLeft: 10
  }
}

module.exports = GoddessScene;
