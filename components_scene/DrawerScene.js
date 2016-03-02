'use strict';

var React = require('react-native');
var { Dimensions } = React;

var SCREEN_WIDTH = Dimensions.get('window').width;

var { DRAWER_OFFSET } = require('../constants/ActionTypes.js');

var {
  StyleSheet,
  View,
  scrollViewew,
  Image,
  PixelRatio,
  TextInput,
  Text,
  ListView,
  TouchableHighlight,
} = React;

var DrawerScene = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Logo />
        <Search />
        <Actions />
      </View>
    );
  }
});

var Actions = React.createClass({
  render: function() {
    return (
      <View style={styles.actionsView}>
        <View style={styles.action}>
          <Text style={styles.actionText}>Log In</Text>
        </View>
        <View style={styles.action}>
          <Text style={styles.actionText}>Sign Up</Text>
        </View>
      </View>
    );
  },
});

var Search = React.createClass({
  render: function() {
    return (
      <View style={{ marginTop: -8 }}>
        <View style={styles.searchSeparator} />
        <View style={styles.searchView} >
          <Image
            style={{ width: 15, height: 15 }}
            source={require('image!search-icon-md')} />
          <Text style={styles.searchText} >Search</Text>
        </View>
        <View style={styles.searchSeparator} />
      </View>
    );
  }
});

var Logo = React.createClass({
  render: function() {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.logoImg}
          source={{uri: 'http://twitchadvertising.tv/wp-content/uploads/2014/03/logo_white_twitch_effects.png'}}
        />
      </View>
    );
  }
});

var imgWidth = 22,
  imgHeight = 30;

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#211F27',
    flex: 1
  },

  contentContainer: {

  },

  scrollView: {

  },

  listView: {
    // backgroundColor: 'red',
  },

  rowView: {
    backgroundColor: '#19191F',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  rowImg: {
    width: imgWidth,
    height: imgHeight,
    marginHorizontal: 15,
  },

  rowText: {
    fontSize: 17,
  },

  sectionView: {
    padding: 2,
    paddingLeft: 10,
  },

  sectionText: {
    color: '#FCFCFC',
    fontSize: 15,
    fontWeight: '500',
  },

  logoImg: {
    width: SCREEN_WIDTH - DRAWER_OFFSET - 100,
    height: 100,
  },

  selectedRow: {
    backgroundColor: '#1A191F',
  },

  textRow: {
    color: '#DAD9E9',
  },

  searchView: {
    flexDirection: 'row',
    backgroundColor: '#19191F',
    padding: 6,
    margin: 10,
    marginTop: 15,
  },

  searchSeparator: {
    backgroundColor: '#19191F',
    height: 1 / PixelRatio.get(),
  },

  rowSeparator: {
    backgroundColor: '#211F27',
    height: 1 / PixelRatio.get(),
  },

  searchText: {
    color: '#BFBFBF',
    paddingLeft: 5,
    // fontSize: 12,
    fontWeight: '600',
  },

  actionsView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(33,31,39,0.9)',
  },

  actionText: {
    color: '#CCB3FD',
    fontSize: 17,
  },

  action: {
    margin: 12,
  },
});

module.exports = DrawerScene;
