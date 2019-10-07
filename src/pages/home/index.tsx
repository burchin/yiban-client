import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { Image, View, Text } from '@tarojs/components';
import Store from './store';

import './style.scss';
import picBanner from './images/banner.png';

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
            <Text key={Math.random()}>{text}</Text>
          ))}
        </View>
      </View>
    );
  }
}

export default Home as ComponentType;
