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
            <Icon name="search" size={20} style={SearchStyle.searchIcon}/>
            <TextInput
              style={SearchStyle.textInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
        </View>
      </View>
    );
  }
});

var SearchStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#433a34',
    marginTop: 20
  },
  searchView: {
    padding: 2,
    paddingLeft: 20
  },
  searchIcon: {
    width: 20,
    height: 20,
    color: '#fff'
  },
  textInput: {
    height: 40,
    borderColor: '#101010',
    borderWidth: 1,
    borderRadius: 20
  }
});

module.exports = Search;
