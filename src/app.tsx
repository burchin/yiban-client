import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Home from './pages/home'

import counterStore from './store/counter'

import './app.scss'

const store = {
  counterStore
}

class App extends Component {

  config: Config = {
    pages: [
      'pages/home/index',
      'pages/course/index',
      'pages/mall/index',
      'pages/my/index'
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
      list: [
        {
          pagePath: 'pages/home/index',
          text: '首页',
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
          text: '商城'
        },
        {
          pagePath: 'pages/my/index',
          text: '我的'
        }
      ]
    }
  }

  componentDidMount () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
