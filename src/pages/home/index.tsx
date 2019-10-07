import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { Image, View, Text } from '@tarojs/components';
import Store from './store';

import './style.scss';
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
  store = new Store();
  config: Config = {
    navigationBarTitleText: '简介'
  };

  render() {
    return (
      <View>
        <Image className="banner" mode="widthFix" src={picBanner} />
        <View className="content">
          {this.store.content.map(text => (
            <Text>{text}</Text>
          ))}
        </View>
      </View>
    );
  }
}

export default Home as ComponentType;
