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

var Logo = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'Unkown',
      location: 'Earth'
    }
  },

  loadError: function(e){
    console.log('error');
  },

  loadSuccess: function(e) {
    console.log('success');
  },

  render: function() {
    var img = require('image!logo');
    console.log(img);
    return (
      <View style={LogoStyle.container}>
        <View style={LogoStyle.logoBox}>
          <Image
            style={LogoStyle.logoImg}
            source={require('image!logo')}
            onLoad={this.loadSuccess}
            onError={this.loadError}
          />
        </View>
      </View>
    );
  }
});

var LogoStyle = {
  container: {
    marginTop: 10,
    height: 100,
    alignItems: 'center'
  },
  logoBox: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: '#544b44',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImg: {
    height: 80,
    width: 80,
    borderRadius: 40
  }
}

module.exports = Logo;
