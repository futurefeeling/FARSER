'use strict';

import React from 'react-native';
import NavigationBar from 'react-native-navbar';
import NewsDetail from '../components/NewsDetail.js';
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
  ActivityIndicatorIOS
} = React;

var Icon = require('react-native-vector-icons/FontAwesome');

var NEWS_COLOR = '#34495e';
var NEWS_COLOR_RGBA = 'rgba(52, 73, 94, 0.1)';

class NewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      loaded: false,
      count: 8
    };

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.REQUEST_URL = `http://news-at.zhihu.com/api/4/theme/${this.props.route.passProps.themeId}`;

    this.fetchData();

  }

  requestURL(
    url = this.REQUEST_URL
  ) {
    return (
      `${url}`
    );
  }

  fetchData() {
    fetch(this.requestURL())
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          news: responseData.stories,
          loaded: true,
        });
      })
      .done();
  }

  showDetail(news) {
    this.props.navigator.push({
      component: NewsDetail,
      passProps: {
        title: news.title,
        id: news.id
      }
    })
  }

  renderNewsList(news, sectionId, rowId, highlightRow) {
    return (
      <TouchableHighlight key={rowId}
        underlayColor={NEWS_COLOR_RGBA}
        onPress={()=>this.showDetail(news)}>
        <View style={NewsListStyle.item}>
          <Text style={NewsListStyle.itemTitle}>{news.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    if (!this.state.loaded) {
      return (
        <View style={{marginTop: 40, flex: 1}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicatorIOS
              size="large"
              color={NEWS_COLOR}
            />
          </View>
        </View>
      );
    }
    return (
        <ListView
          style={{backgroundColor: '#fff', flex: 1}}
          pageSize={this.state.count}
          initialListSize={this.state.count}
          dataSource={this.dataSource.cloneWithRows(this.state.news)}
          renderRow={this.renderNewsList.bind(this)}
        />
    );
  }
}

class NewsThemeList extends React.Component {
  constructor(props) {
    super(props)
  }

  _handlePressBtn() {
    this.props.navigator.pop();
  }

  render() {
    var barIcon = <Icon name='arrow-left' size={20} color='#fff' style={NewsThemeListStyle.backIcon}  onPress={this._handlePressBtn.bind(this)}/>

    return (
      <View style={NewsThemeListStyle.container}>
        <NavigationBar
          title={{title: `${this.props.route.passProps.title}`, tintColor: '#fff'}}
          tintColor={NEWS_COLOR}
          statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
          leftButton={barIcon}
          />
        <NewsList navigator={this.props.navigator} route={this.props.route}/>
      </View>
    )
  }
}

var NewsListStyle = {
  item: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: NEWS_COLOR_RGBA,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10
  },
  itemTitle: {
    flex: 1,
    fontWeight: 'bold'
  }
}

var NewsThemeListStyle = {
  container: {
    flex: 1
  },
  backIcon: {
    marginLeft: 10,
    marginTop: 4
  }
}

module.exports = NewsThemeList;
