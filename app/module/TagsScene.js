'use strict';

import React from 'react-native';
import NavigationBar from 'react-native-navbar';
import TagsSceneStore from '../stores/TagsSceneStore.js';
import TagsSceneUtils from '../utils/TagsScenelUtils.js';
import ItemCheckbox from 'react-native-item-checkbox';

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
  ActivityIndicatorIOS,
  AlertIOS,
  StatusBarIOS,
} = React;

var TAGS_COLOR = 'rgb(31,31,46)';
var CHECKBOX_BG = 'rgba(31, 31, 46, 0.9)';
var NOT_FINISHED_COLOR = 'rgba(31, 31, 46, 0.6)';

function getStatusFromStore() {
  return TagsSceneStore.getStore();
}

var TagStyle = {
  container: {
    flexDirection: 'row',
    backgroundColor: CHECKBOX_BG,
    borderRightWidth: 8,
    borderRightColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#a8a6a6'
  },
  checkbox: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  tagInfo: {
    flex: 2,
    padding: 20,
    justifyContent: 'center'
  },
  content: {
    color: '#fff'
  }
}

class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  onCheckCallback() {
    console.log('hei');
  }

  render() {
    return (
      <View style={TagStyle.container}>
        <View style={TagStyle.checkbox}>
          <ItemCheckbox
            onCheck={this.onCheckCallback.bind(this)}
            />
        </View>
        <View style={TagStyle.tagInfo}>
          <Text style={TagStyle.content}>{this.props.content}</Text>
        </View>
      </View>
    )
  }
}

class TagsScene extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      list: getStatusFromStore().list
    }
  }

  componentWillUnmount(){
    TagsSceneStore.removeChangeListener(this._onChange.bind(this));
  }

  componentDidMount() {
    TagsSceneUtils.getData(3);
    TagsSceneStore.addChangeListener(this._onChange.bind(this));
  }

  render() {
    var tags = this.state.list.map((tag, index) => {
      return (
        <Tag key={index} id={tag.id} content={tag.content} status={tag.status}/>
      )
    })
    return (
        <View style={TagsSceneStyle.container}>
          <NavigationBar
            title={{title: 'TAGS', tintColor: '#fff'}}
            tintColor={TAGS_COLOR}
            statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
            />
          <ScrollView style={TagsSceneStyle.container}>
            {tags}
          </ScrollView>
        </View>
    );
  }

  _onChange() {
    this.setState(getStatusFromStore());
  }
}

var TagsSceneStyle = {
  container: {
    flex: 1
  }
}

module.exports = TagsScene;
