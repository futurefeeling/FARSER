'use strict';

import NavigationBar from 'react-native-navbar';

import Icon from 'react-native-vector-icons/FontAwesome';
import GoddessStore from '../stores/GoddessStore.js';
import Message from '../components/Message.js';
import GoddessUtils from '../utils/GoddessUtils.js';
import MovieDetail from '../components/MovieDetail.js';

var GODDESS_COLOR = 'rgb(223, 116, 84)';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Animated,
  Easing,
  TouchableHighlight,
  ScrollView,
  ActivityIndicatorIOS
} from 'react-native';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loaded: false,
      count: 20,
      start: 0,
      total: 0,
      rp: 20
    };

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

    this.fetchData();

  }

  requestURL(
    url = this.REQUEST_URL,
    count = this.state.count,
    start = this.state.start
  ) {
    return (
      `${url}?count=${count}&start=${start}`
    );
  }

  fetchData() {
    fetch(this.requestURL())
      .then(response => response.json())
      .then(responseData => {
        let newStart = responseData.start + responseData.count;
        this.setState({
          movies: responseData.subjects,
          loaded: true,
          total: responseData.total,
          start: newStart,
        });
      })
      .done();
  }

  showDetail(movie) {
    this.props.navigator.push({
      component: MovieDetail,
      passProps: {
        title: movie.title,
        id: movie.id
      }
    })
  }

  renderMovieList(movie, sectionId, rowId, highlightRow) {
    return (
      <TouchableHighlight key={rowId}
        underlayColor='rgba(223,86,34, 0.1)'
        onPress={()=>this.showDetail(movie)}>
        <View style={MovieItemStyle.item}>
          <View style={MovieItemStyle.itemImage}>
            <Image
              source={{uri: movie.images.large}}
              style={MovieItemStyle.image}
             />
          </View>
          <View style={MovieItemStyle.itemContent}>
            <Text style={MovieItemStyle.itemHeader}>{movie.title}</Text>
            <Text style={MovieItemStyle.itemMeta}>
              {movie.original_title} ( {movie.year} )
            </Text>
            <Text style={MovieItemStyle.redText}>
              评分：{movie.rating.average}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  loadMore() {
    fetch(this.requestURL())
      .then(response => response.json())
      .then(responseData => {
        let newStart = responseData.start + responseData.count;
        this.setState({
          movies: [...this.state.movies, ...responseData.subjects],
          start: newStart
        });
      })
      .done();
  }

  onEndReached(e) {
    if (this.state.total > this.state.start) {
      this.loadMore();
    }
  }

  renderFooter() {
    if (this.state.total > this.state.start) {
      return (
        <View
          style={{
            marginVertical: 20,
            paddingBottom: 18,
            alignSelf: 'center'
          }}
        >
          <ActivityIndicatorIOS />
        </View>
      );
    } else {
      return (
        <View
          style={{
            marginVertical: 20,
            paddingBottom: 50,
            alignSelf: 'center'
          }}
        >
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.3)'
            }}
          >no more load :D</Text>
        </View>
      );
    }
  }

  render() {
    if (!this.state.loaded) {
      return (
        <View style={{marginTop: 40, flex: 1}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicatorIOS
              size="large"
              color={GODDESS_COLOR}
            />
          </View>
        </View>
      );
    }
    return (
        <ListView
          style={{flex: 1}}
          renderFooter={this.renderFooter.bind(this)}
          pageSize={this.state.count}
          onEndReached={this.onEndReached.bind(this)}
          onEndReachedThreshold={this.state.rp}
          initialListSize={this.state.count}
          dataSource={this.dataSource.cloneWithRows(this.state.movies)}
          renderRow={this.renderMovieList.bind(this)}
        />
    );
  }
}

function getStatusFromStore() {
  return GoddessStore.getStore();
}

class GoddessScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }

  componentWillUnmount(){
    GoddessStore.removeChangeListener(this._onChange.bind(this));
  }

  componentDidMount() {
    GoddessStore.addChangeListener(this._onChange.bind(this));
  }

  render() {
      // var barIcon = <Icon name='bars' size={30} color='#fff' style={GoddessSceneStyle.homeIcon} onPress={this.props.handlePressBtn}/>;

      return (
          <View style={GoddessSceneStyle.container}>
            <NavigationBar
              title={{title: 'GODDESS', tintColor: '#fff'}}
              tintColor={GODDESS_COLOR}
              statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
              />

            <MovieList navigator={this.props.navigator}/>
          </View>
        )
  }

  _onChange() {
    this.setState({messages: getStatusFromStore()});
  }
}

var MovieItemStyle = {
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(100, 53, 201, 0.1)',
    paddingBottom: 6,
    paddingTop: 6,
  },
  itemContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 6,
  },
  itemHeader: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: '#6435c9',
    marginBottom: 6,
  },
  itemMeta: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom:6,
  },
  redText: {
    color: '#db2828',
    fontSize: 15,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 99,
    height: 138,
    margin: 6,
  },
  itemText: {
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.8)',
    lineHeight: 26,
  }
}

var GoddessSceneStyle = {
  container: {
    flex: 1
  },
  homeIcon: {
    marginLeft: 10
  }
}

module.exports = GoddessScene;
