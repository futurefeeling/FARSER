'use strict';

var React = require('react-native');

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

var Icon = require('react-native-vector-icons/FontAwesome');

var Search = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },

  render: function() {
    return (
      <View style={SearchStyle.container}>
        <View style={SearchStyle.searchView} >
          <Icon name="search" size={18} color="#fff" />
          <TextInput
            style={SearchStyle.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder='Search something ...'
            placeholderTextColor='#b1b2b3'
            />
        </View>
      </View>
    );
  }
});

var SearchStyle = StyleSheet.create({
  container: {
    marginTop: 25
  },
  searchView: {
    backgroundColor: '#433a34',
    flexDirection: 'row',
    height: 38,
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#101010',
    borderWidth: 1,
    borderRadius: 20
  },
  searchIcon: {
    width: 36,
    height: 36,
    padding: 8,
    marginLeft: 8,
    borderRadius: 18
  },
  textInput: {
    flex: 1,
    height: 36,
    paddingRight: 10,
    color: '#fff'
  }
});

module.exports = Search;
