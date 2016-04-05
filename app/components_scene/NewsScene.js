'use strict';

import React from 'react-native';
import NavigationBar from 'react-native-navbar';
import NewsSceneStore from '../stores/NewsSceneStore.js';
import NewsSceneUtils from '../utils/NewsSceneUtils.js';

var Icon = require('react-native-vector-icons/FontAwesome');
var { Dimensions } = React;
var SCREEN_WIDTH = Dimensions.get('window').width;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} = React;

function getStatusFromStore() {
  return NewsSceneStore.getStore();
}

class ThemeItem extends React.Component {
  handlePress(e) {
    console.log(e.target);
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor='rgba(52,73,94, 0.1)'
        onPress={this.handlePress.bind(this)}>
        <View style={ThemeItemStyle.container}>
          <View style={ThemeItemStyle.itemImage}>
            <Image
              source={{uri: this.props.data.thumbnail}}
              style={ThemeItemStyle.image}
              />
          </View>
          <View style={ThemeItemStyle.itemInfo}>
            <Text
              style={ThemeItemStyle.nameText}
              numberOfLines={1}>
              {this.props.data.name}
            </Text>
            <Text style={ThemeItemStyle.descText}>
              {this.props.data.description}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

class ThemeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var themeList = this.props.themeList.map(
      (item, index)=> <ThemeItem key={index} data={item}/>
    )

    return (
      <ScrollView style={ThemeListStyle.container}>
        {themeList}
      </ScrollView>
    )
  }
}

class NewsScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      themeList: []
    });
  }

  componentWillUnmount(){
    NewsSceneStore.removeChangeListener(this._onChange.bind(this));
  }

  componentDidMount() {
    NewsSceneUtils.getData();
    NewsSceneStore.addChangeListener(this._onChange.bind(this));
  }

  render() {
    var barIcon = (
      <Icon name='bars' size={30} color='#fff'
      style={NewsSceneStyle.homeIcon}
      onPress={this.props.handlePressBtn}/>
    );

    return (
        <View style={{flex: 1}}>
          <NavigationBar
            title={{title: 'NEWS', tintColor: '#fff'}}
            tintColor='#34495e'
            statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
            leftButton={barIcon}
            />
          <ThemeList themeList={this.state.themeList}/>
        </View>
    );
  }

  _onChange() {
    this.setState({
      themeList: getStatusFromStore().themeList
    });
  }
}

var NewsSceneStyle = {
  homeIcon: {
    marginLeft: 10
  }
}

var ThemeListStyle = {
  container: {
    flex: 1
  }
}

var ThemeItemStyle = {
  container: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: 'rgba(100, 53, 201, 0.1)',
    paddingBottom: 6,
    paddingTop: 6,
  },
  image: {
    width: 100,
    height: 80,
    margin: 6,
    marginRight: 10
  },
  nameText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495e',
    width: SCREEN_WIDTH - 100 - 6 * 2 - 10,
  },
  descText: {
    marginTop: 12,
    fontSize: 12,
    width: SCREEN_WIDTH - 100 - 6 * 2 - 10,
    textAlign: 'justify',
    color: '#8b8c8c'
  }
}

module.exports = NewsScene;
