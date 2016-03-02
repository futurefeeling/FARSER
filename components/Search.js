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

var SearchStyle = StyleSheet.create({

});

module.exports = Search;
