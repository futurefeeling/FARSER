'use strict';

import React from 'react-native';
import NavigationBar from 'react-native-navbar';
import TagsSceneStore from '../stores/TagsSceneStore.js';
import TagsSceneUtils from '../utils/TagsScenelUtils.js';
import ItemCheckbox from '../vendor/react-native-item-checkbox';
import Button from 'react-native-button';
import assign from 'lodash/assign.js';

var Icon = require('react-native-vector-icons/FontAwesome');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  TextInput
} = React;

var TAGS_COLOR = '#433a34';
var CHECKBOX_BG = '#4B5161';
var NOT_FINISHED_COLOR = 'rgb(83, 90, 108)';

function getStatusFromStore() {
  return TagsSceneStore.getStore();
}

var TagStyle = {
  container: {
    flexDirection: 'row',
    backgroundColor: CHECKBOX_BG,
    borderRightWidth: 6,
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
  }
}

class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  onUpdateCallback() {
    var $id = this.props.id;
    var $status = this.props.status;
    TagsSceneUtils.changeTagStatus($id, $status);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render() {
    var bgColor,
        textColor = '#fff';
    if (parseInt(this.props.status) === 1) {
      bgColor = NOT_FINISHED_COLOR;
    } else {
      bgColor = CHECKBOX_BG;
      textColor = 'grey';
    }

    var rightColor, randomInt;
    var colorMap = ['#1ABC9C', '#3498DB', '#9B59B6','#95A5A6','#F1C40F','#E74C3C'];
    randomInt = this.getRandomInt(0, 5);
    rightColor = colorMap[randomInt];
    return (
      <View style={assign({}, TagStyle.container, {borderRightColor: rightColor})}>
        <View style={TagStyle.checkbox}>
          <ItemCheckbox
            onCheck={this.onUpdateCallback.bind(this)}
            onUncheck={this.onUpdateCallback.bind(this)}
            default={this.props.status == '2'}
            />
        </View>
        <View style={assign({}, TagStyle.tagInfo, {backgroundColor: bgColor})}>
          <Text style={{color: textColor}}>{this.props.content}</Text>
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

  addTagHandle(event) {
    let content = this.state.text;
    if (content.length > 0) {
      TagsSceneUtils.addTag(content);
      this.setState({text: ''})
    }
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
          <View style={TagsSceneStyle.addTag}>
            <TextInput
              style={TagsSceneStyle.textInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              ref="textInput"
            />
          <Button style={TagsSceneStyle.button} onPress={this.addTagHandle.bind(this)}>
              ADD
            </Button>
          </View>
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
  },
  addTag: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: CHECKBOX_BG,
    borderBottomWidth: 2,
    borderBottomColor: TAGS_COLOR
  },
  textInput: {
    flex: 2,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff'
  },
  button: {
    flex: 1,
    height: 40,
    padding: 10,
    backgroundColor: TAGS_COLOR,
    color: '#fff'
  }
}

module.exports = TagsScene;
