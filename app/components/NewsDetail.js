'use strict';

import React from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import NewsDetailStore from '../stores/NewsDetailStore.js';
import NewsDetailUtils from '../utils/NewsDetailUtils.js';

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

function getStatusFromStore() {
  return NewsDetailStore.getStore();
}

class NewsDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = getStatusFromStore();
  }

  componentWillUnmount(){
    NewsDetailStore.removeChangeListener(this._onChange.bind(this));
  }

  componentDidMount() {
    const REQUEST_URL = `http://news-at.zhihu.com/api/3/news/${this.props.route.passProps.id}`;
    NewsDetailUtils.getData(REQUEST_URL);
    NewsDetailStore.addChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(getStatusFromStore());
  }

  _handlePressBtn() {
    this.props.navigator.pop();
  }

  render() {

    var barIcon = <Icon name='arrow-left' size={20} color='#fff' style={NewsDetailStyle.backIcon}  onPress={this._handlePressBtn.bind(this)}/>

    return (
      <View style={NewsDetailStyle.container}>
        <NavigationBar
          title={{title: '新闻详情', tintColor: '#fff'}}
          tintColor={NEWS_COLOR}
          statusBar={{style: 'light-content', hidden: false, showAnimation:'none'}}
          leftButton={barIcon}
          />

        <WebView style={NewsDetailStyle.webview}
          source={{url: `http://news-at.zhihu.com/story/${this.props.route.passProps.id}`}}
          startInLoadingState={true}
          >
        </WebView>
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
