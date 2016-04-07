'use strict';

import React from 'react-native';

import NavigationBar from 'react-native-navbar';

var { Dimensions } = React;

var SCREEN_WIDTH = Dimensions.get('window').width;

var Icon = require('react-native-vector-icons/FontAwesome');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  WebView
} = React;

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={BlogItemStyle.container}>
        <View style={BlogItemStyle.dateView}>
          <Text style={BlogItemStyle.dateText}>Nov</Text>
          <Text style={BlogItemStyle.dateText}>21th</Text>
        </View>
        <View style={BlogItemStyle.title}>
          <Text style={BlogItemStyle.titleText}
            numberOfLines={1}>
            标题标题标标题标题标标题标题标标题标题标标题标题标题
          </Text>
        </View>
        <View style={BlogItemStyle.brief}>
          <Text style={BlogItemStyle.briefText}
            numberOfLines={3}>
            &nbsp;&nbsp;&nbsp;&nbsp;我就是简介我就是简介我就是简介我就是简介我就是简介我就是简介我就是简介我就是简介我就是简介我就是简介
          </Text>
        </View>
      </View>
    )
  }
}

class BlogItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={BlogItemListStyle.container}>
        <BlogItem />
        <BlogItem />
      </View>
    )
  }
}

class BlogScene extends React.Component {
  constructor(props) {
    super(props)
  }

  componetDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
        <View style={BlogSceneStyle.container}>
          <NavigationBar
            title={{title: 'BLOG', tintColor: '#fff'}}
            tintColor='#3498db'
            statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
            />
          {/*<BlogItemList style={BlogSceneStyle.blogItemList}/>*/}
          <WebView style={BlogSceneStyle.webview}
            source={{url: 'http://showmecode.cc/'}}
            startInLoadingState={true}
            >
          </WebView>
        </View>
    );
  }
}

var BlogItemStyle = {
  container: {
    marginTop: 25,
    paddingTop: 30,
    paddingBottom: 16,
    marginLeft: 20,
    marginRight: 20,
    position: 'relative',
    backgroundColor: 'rgba(212,212,212,0.3)',
    borderRadius: 4
  },
  dateView: {
    position: 'absolute',
    flex: 1,
    width: 46,
    height: 46,
    top: -16,
    left: -15,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3498db',
    backgroundColor: '#3498db',
  },
  dateText: {
    color: '#fff'
  },
  title: {
    position: 'absolute',
    top: 20,
    left: 30,
    paddingBottom: 4
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    width: SCREEN_WIDTH - 20 * 2 - 30 * 2
  },
  brief: {
    paddingTop: 12,
    paddingLeft: 10,
    paddingRight: 10
  },
  briefText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'justify'
  }
}

var BlogItemListStyle = {
  container: {
    flex: 1
  }
}

var BlogSceneStyle = {
  container: {
    flex: 1
  },
  homeIcon: {
    marginLeft: 10
  },
  webview: {
    flex: 1
  }
}

module.exports = BlogScene;
