import Taro, { Component, Config } from '@tarojs/taro'
import counterStore from './store/counter'
import { Provider } from '@tarojs/mobx'
import Home from './pages/home'

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
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/home/index',
          text: 'AAA',
          iconPath: './assets/images/tab/home.png',
          selectedIconPath: './assets/images/tab/home_selected.png'
        },
        {
          pagePath: 'pages/course/index',
          text: 'BBB',
          iconPath: './assets/images/tab/course.png',
          selectedIconPath: './assets/images/tab/course_selected.png'
        },
        {
          pagePath: 'pages/mall/index',
          text: 'CCC',
          iconPath: './assets/images/tab/mall.png',
          selectedIconPath: './assets/images/tab/mall_selected.png'
        },
        {
          pagePath: 'pages/my/index',
          text: 'DDD',
          iconPath: './assets/images/tab/my.png',
          selectedIconPath: './assets/images/tab/my_selected.png'
        }
      ]
    }
  }

  componentDidMount () {}

  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
