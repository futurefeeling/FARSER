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
      image: 'logo',
      name: 'FARSER',
      location: 'Guangzhou China'
    }
  },

  render: function() {
    var images = {
      logo: require('../iamges/logo.png')
    }

    var image = images[this.props.image];

    return (
      <View style={LogoStyle.container}>
        <View style={LogoStyle.logoBox}>
          <Image
            style={LogoStyle.logoImg}
            source={image}
          />
        </View>
        <Text style={LogoStyle.name}>{this.props.name}</Text>
        <View style={LogoStyle.locationBox}>
          <Icon name='map-marker' style={LogoStyle.locationIcon}/>
          <Text style={LogoStyle.location}>{this.props.location}</Text>
        </View>
      </View>
    );
  }
});

var LogoStyle = {
  container: {
    alignItems: 'center',
    marginTop: 10
  },
  logoBox: {
    alignItems: 'center',
    backgroundColor: '#544b44',
    borderRadius: 96,
    height: 96,
    justifyContent: 'center',
    width: 96
  },
  logoImg: {
    borderRadius: 40,
    height: 80,
    width: 80
  },
  name: {
    color: '#aaaaaa',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 6
  },
  locationBox: {
    flexDirection: 'row',
    marginTop: 2,
    alignItems: 'center'
  },
  locationIcon: {
    color: '#4f9fcf',
    fontSize: 16,
    height: 16,
    width: 16
  },
  location: {
    color: '#aaaaaa',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1
  }
}

module.exports = Logo;
