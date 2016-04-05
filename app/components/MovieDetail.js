'use strict';

import React from 'react-native';

import NavigationBar from 'react-native-navbar';

import Icon from 'react-native-vector-icons/FontAwesome';

let {
  Text,
  View,
  Image,
  ListView,
  ActivityIndicatorIOS,
  TouchableHighlight,
} = React;

var GODDESS_COLOR = '#df7454';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieDetail: '',
      loaded: false,
    };

    const REQUEST_URL = `https://api.douban.com/v2/movie/subject/${this.props.route.passProps.id}`;

    this.fetchData(REQUEST_URL);
  }

  fetchData(REQUEST_URL) {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movieDetail: responseData,
          loaded: true,
        });
      })
      .done();
  }

  _handlePressBtn() {
    this.props.navigator.pop();
  }

  render() {

    var loading = (
      <View style={MovieDetailStyle.container}>
        <View style={MovieDetailStyle.loading}>
          <ActivityIndicatorIOS
            size="large"
            color={GODDESS_COLOR}
          />
        </View>
      </View>
    );

    var movie, summary;

    if (this.state.movieDetail.summary) {
      movie = this.state.movieDetail;
      summary = movie.summary.split(/\n/).map((p, index) => {
        return (
          <View style={MovieDetailStyle.paragraph} key={index}>
            <Text style={MovieDetailStyle.itemText}>{p}</Text>
          </View>
        );
      });
    }

    var barIcon = <Icon name='arrow-left' size={20} color='#fff' style={MovieDetailStyle.backIcon}  onPress={this._handlePressBtn.bind(this)}/>

    return (
      <View style={MovieDetailStyle.container}>
        <NavigationBar
          title={{title: `${this.props.route.passProps.title}`, tintColor: '#fff'}}
          tintColor={GODDESS_COLOR}
          statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
          leftButton={barIcon}
          />

        <View style={MovieDetailStyle.summary}>
          {!this.state.loaded ? loading : null}
          {summary}
        </View>
      </View>
    );
  }
}

var MovieDetailStyle = {
  container: {
    flex: 1
  },
  loading: {
    marginTop: 40
  },
  backIcon: {
    marginLeft: 10,
    marginTop: 4
  },
  summary: {
    flexDirection: 'column'
  },
  paragraph: {
    marginBottom: 15,
    paddingLeft: 6,
    paddingRight: 6
  }
};

module.exports = MovieDetail;
