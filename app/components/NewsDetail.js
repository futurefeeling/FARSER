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
  WebView
} = React;

var NEWS_COLOR = '#34495e';

class NewsDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newsDetail: '',
      loaded: false,
    };

    const REQUEST_URL = `http://news-at.zhihu.com/api/3/news/${this.props.route.passProps.id}`;

    this.fetchData(REQUEST_URL);
  }

  fetchData(REQUEST_URL) {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          newsDetail: responseData,
          loaded: true,
        });
      })
      .done();
  }

  _handlePressBtn() {
    this.props.navigator.pop();
  }

  onLoadStart() {
    console.log('start');
  }

  render() {

    var loading = (
      <View style={NewsDetailStyle.container}>
        <View style={NewsDetailStyle.loading}>
          <ActivityIndicatorIOS
            size="large"
            color={NEWS_COLOR}
          />
        </View>
      </View>
    );

    var newsData;
    var HTML;

    if (this.state.newsDetail.id) {
      newsData = this.state.newsDetail;
      HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${newsData.title}</title>
          <meta http-equiv="content-type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=320, user-scalable=no">
          <link rel="stylesheet" href='${newsData.css[0]}'><link>
        </head>
        <body>
          ${newsData.body}
          <script src='${newsData.js[0]}'></script>
        </body>
      </html>
      `
    }

    var barIcon = <Icon name='arrow-left' size={20} color='#fff' style={NewsDetailStyle.backIcon}  onPress={this._handlePressBtn.bind(this)}/>

    return (
      <View style={NewsDetailStyle.container}>
        <NavigationBar
          title={{title: '新闻详情', tintColor: '#fff'}}
          tintColor={NEWS_COLOR}
          statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
          leftButton={barIcon}
          />

        <View style={NewsDetailStyle.summary}>
          {!this.state.loaded ? loading : null}

          <WebView style={NewsDetailStyle.webview}
            source={{html: HTML}}
            startInLoadingState={true}
            onLoadStart={this.onLoadStart}
            >
          </WebView>
        </View>
      </View>
    );
  }
}

var NewsDetailStyle = {
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
  },
  webview: {
    flex: 1
  }
};

module.exports = NewsDetail;
