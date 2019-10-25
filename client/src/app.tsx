import Taro, { Component, Config } from '@tarojs/taro';
import RootStore from './store';
import { Provider } from '@tarojs/mobx';
import Home from './pages/home';
import './app.scss';

const store = new RootStore();

class App extends Component {
  config: Config = {
    pages: [
      'pages/home/index',
      'pages/course/index',
      'pages/course/detail/index',
      'pages/mall/index',
      'pages/my/index',
      'pages/my/info/index',
      'pages/my/info/name',
      'pages/my/info/school',
      'pages/manage/index'
    ],
    subPackages: [
      {
        name: 'manage',
        root: 'manage/',
        pages: [
          'course/add/index',
          'course/list/index',
          'course/arrange/index'
        ]
      }
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#000',
      selectedColor: '#1296db',
      backgroundColor: '#fff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/home/index',
          text: '简介',
          iconPath: './assets/images/tab/home.png',
          selectedIconPath: './assets/images/tab/home_selected.png'
        },
        {
          pagePath: 'pages/course/index',
          text: '约课',
          iconPath: './assets/images/tab/course.png',
          selectedIconPath: './assets/images/tab/course_selected.png'
        },
        {
          pagePath: 'pages/mall/index',
          text: '商城',
          iconPath: './assets/images/tab/mall.png',
          selectedIconPath: './assets/images/tab/mall_selected.png'
        },
        {
          pagePath: 'pages/my/index',
          text: '我的',
          iconPath: './assets/images/tab/my.png',
          selectedIconPath: './assets/images/tab/my_selected.png'
        },
        {
          pagePath: 'pages/manage/index',
          text: '后台'
        }
      ]
    }
  };

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
