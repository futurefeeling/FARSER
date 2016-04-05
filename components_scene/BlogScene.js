'use strict';

import React from 'react-native';

import NavigationBar from 'react-native-navbar';

var Icon = require('react-native-vector-icons/FontAwesome');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} = React;

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={BlogItemStyle.container}>
        <View style={BlogItemStyle.date}>
          <Text>Nov</Text>
          <Text>21th</Text>
        </View>
        <Text>ni 和</Text>
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
      <View>
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
    var barIcon = <Icon name='bars' size={30} color='#fff' style={BlogSceneStyle.homeIcon}/>
    return (
        <View>
          <NavigationBar
            title={{title: 'BLOG', tintColor: '#fff'}}
            tintColor='#3498db'
            statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
            leftButton={barIcon}
            />
          <BlogItemList style={BlogSceneStyle.blogItemList}/>
        </View>
    );
  }
}

var BlogItemStyle = {
  container: {
    marginTop: 10,
    paddingTop: 30,
    paddingBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    position: 'relative'
  },
  date: {
    position: 'absolute',
    flex: 1,
    width: 58,
    height: 58,
    top: 0,
    left: -5,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: 'red'
  }
}

var BlogSceneStyle = {
  homeIcon: {
    marginLeft: 10
  },
  blogItemList: {
    backgroundColor: '#ccc'
  }
}

module.exports = BlogScene;
