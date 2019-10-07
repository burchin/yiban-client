import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { Image, View, Text } from '@tarojs/components';

import './index.scss';
import picBanner from './images/banner.png';

type PageStateProps = {
  counterStore: {
    counter: number;
    increment: Function;
    decrement: Function;
    incrementAsync: Function;
  };
};

interface Home {
  props: PageStateProps;
}

class Home extends Component {
  config: Config = {
    navigationBarTitleText: '简介'
  };

  content: Array<string> = [
    'Taro 是一套遵循 React 语法规范的 多端开发 解决方案。',
    '现如今市面上端的形态多种多样，Web、React-Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。',
    '使用 Taro，我们可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝/字节跳动/QQ小程序、快应用、H5、React-Native等）运行的代码。',
    'Taro 是一套遵循 React 语法规范的 多端开发 解决方案。',
    '现如今市面上端的形态多种多样，Web、React-Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。',
    '使用 Taro，我们可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝/字节跳动/QQ小程序、快应用、H5、React-Native等）运行的代码。'
  ];

  render() {
    return (
      <View>
        <Image mode="widthFix" src={picBanner} />
        <View className="content">
          {this.content.map(t => (<Text>{t}</Text>))}
        </View>
      </View>
    );
  }
}

export default Home as ComponentType;
