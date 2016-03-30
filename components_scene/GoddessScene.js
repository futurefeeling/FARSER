'use strict';

import NavigationBar from 'react-native-navbar';

import navbarStyle from '../navbarStyle.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import GoddessStore from '../stores/GoddessStore.js';
import Message from '../components/Message.js';
import GoddessUtils from '../utils/GoddessUtils.js';

var GODDESS_COLOR = '#df7454';

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
  ActivityIndicatorIOS
} from 'react-native';



function getStatusFromStore() {
  return GoddessStore.getStore();
}

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loaded: false,
      count: 20,
      start: 0,
      total: 0,
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

  renderMovieList(movie) {
    return (
      <TouchableHighlight
        underlayColor="rgba(34, 26, 38, 0.1)"
      >
        <View>
            <Text>{movie.title}</Text>
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

  onEndReached() {
    console.log(
      `到底了！开始：${this.state.start}，总共：${this.state.total}`
    );

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
            paddingBottom: 50,
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
          >没有可以显示的内容了：）</Text>
        </View>
      );
    }
  }

  render() {
    if (!this.state.loaded) {
      return (
        <View>
          <View>
            <ActivityIndicatorIOS
              size="large"
              color="#6435c9"
            />
          </View>
        </View>
      );
    }
    return (
      <View style={MessageListStyle.container}>
        <ListView
          renderFooter={this.renderFooter.bind(this)}
          pageSize={this.state.count}
          onEndReached={this.onEndReached.bind(this)}
          initialListSize={this.state.count}
          dataSource={this.dataSource.cloneWithRows(this.state.movies)}
          renderRow={this.renderMovieList.bind(this)}
        />
      </View>
    );
  }
}

var TIMES = 100;

class GoddessScene extends React.Component {
  constructor(props) {
    super(props);
    GoddessUtils.getData(0);
    this.state = {
      messages: getStatusFromStore(),
      rotateValue: new Animated.Value(0)
    }
  }

  _startAnimation(){
    this.state.rotateValue.setValue(0);
    Animated.timing(this.state.rotateValue, {
      toValue: 50*TIMES,
      duration: 800*TIMES,
      easing: Easing.linear
    }).start(this._startAnimation.bind(this));
  }

  componentWillUnmount(){
    GoddessStore.removeChangeListener(this._onChange.bind(this));
  }

  componentDidMount() {
    this._startAnimation();
    GoddessStore.addChangeListener(this._onChange.bind(this));
  }

  render() {
      var barIcon = <Icon name='bars' size={30} color='#fff' style={GoddessSceneStyle.homeIcon}/>;

      var messageList = this.state.messages.messageList;
      var pageNum = this.state.messages.pageNum;
      var hasNextPage = this.state.messages.hasNextPage;

      return (
          <View>
            <NavigationBar
              title={{title: 'GODDESS', tintColor: '#fff'}}
              tintColor={GODDESS_COLOR}
              statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
              leftButton={barIcon}
              />
            <View style={GoddessSceneStyle.container}>
              {/*<View style={GoddessSceneStyle.logoBox}>
                <Animated.Image
                  source={require('image!goddess')}
                  style={[
                    GoddessSceneStyle.logoImg,
                    {transform: [{
                      rotate: this.state.rotateValue.interpolate({
                        inputRange: [0, 360],
                        outputRange: ['0deg', '360deg']
                      })}
                    ]}
                  ]}>
                </Animated.Image>
              </View>*/}
              <MessageList messageList={messageList} pageNum={pageNum} hasNextPage={hasNextPage}/>
            </View>
          </View>
        )
  }

  _onChange() {
    this.setState({messages: getStatusFromStore()});
  }
}

var GoddessSceneStyle = {
  container: {
    alignItems: 'center',
    marginTop: 10
  },
  homeIcon: {
    marginLeft: 10
  },
  logoBox: {
    alignItems: 'center',
    borderRadius: 80,
    height: 80,
    justifyContent: 'center',
    width: 80
  },
  logoImg: {
    borderRadius: 35,
    borderWidth: 1,
    borderColor: GODDESS_COLOR,
    height: 70,
    width: 70
  }
}

var MessageListStyle = {
  container: {
    marginTop: 20
  }
}

module.exports = GoddessScene;
