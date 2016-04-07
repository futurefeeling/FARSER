'use strict';

import React from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
var {Dimensions} = React;

var SCREEN_HEIGHT = Dimensions.get('window').height;

let {
  Text,
  View,
  Image,
  ListView,
  ActivityIndicatorIOS,
  TouchableHighlight,
  ScrollView
} = React;

var GODDESS_COLOR = 'rgb(223, 116, 84)';

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

    var movie, summary, title;

    console.log(this.state.movieDetail);

    if (this.state.movieDetail.summary) {
      movie = this.state.movieDetail;
      title = (<Text style={MovieDetailStyle.titleText}>{movie.title}</Text>);
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

        <View>
          {!this.state.loaded ? loading :
            <View style={MovieDetailStyle.content}>
              <View style={MovieDetailStyle.title}>
                {title}
              </View>
              <ScrollView style={MovieDetailStyle.summary}>
                {summary}
              </ScrollView>
            </View>
          }
        </View>
      </View>
    );
  }
}

/**
 * 64 为 NavigationBar 的高度
 * 20 为 content 的 margin
 * 78 为 title
 */
const ARTICLE_HEIGHT = SCREEN_HEIGHT - 64 - 20 * 2 - 78;

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
  content: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(223, 116, 84, 0.2)'
  },
  title: {
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    marginBottom: 10
  },
  summary: {
    paddingLeft: 20,
    paddingRight: 20,
    height: ARTICLE_HEIGHT
  },
  titleText: {
    fontSize: 18
  },
  paragraph: {
    marginBottom: 15
  },
  itemText: {
    textAlign: 'justify'
  }
};

module.exports = MovieDetail;
